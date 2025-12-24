import { useState } from "react";
import UserModal from "./UserModal";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

const UsersTable = () => {
      const [modalOpen, setModalOpen] = useState(false);
      const [form, setForm] = useState({});

      const handleEdit = (row) => {
            setForm(row);
            setModalOpen(true);
      };

      const handleSubmit = () => {
            console.log("Updated data:", form);
            setModalOpen(false);
      };
      const [sidebarOpen, setSidebarOpen] = useState(false);
      const data = [{
            id: 1,
            name: "Rajesh",
            mobile: "1234567890",
            role: "Admin"
      }, {
            id: 2,
            name: "Rajesh",
            mobile: "1234567890",
            role: "Admin"
      }]
      return (
            <>
                  <div className="flex h-screen overflow-hidden">

                        {/* Sidebar */}
                        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                        {/* Content area */}
                        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                              {/*  Site header */}
                              <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                                    <main className="grow">




                                          {/* TABLE */}
                                          <div
                                                className="overflow-x-auto rounded-lg shadow
        bg-white dark:bg-slate-800
        border border-gray-200 dark:border-slate-700"
                                          >
                                                <table className="min-w-full text-sm">
                                                      <thead
                                                            className="bg-gray-100 dark:bg-slate-700
            text-gray-700 dark:text-slate-200"
                                                      >
                                                            <tr>
                                                                  <th className="px-4 py-3 text-left">#</th>
                                                                  <th className="px-4 py-3 text-left">Name</th>
                                                                  <th className="px-4 py-3 text-left">Mobile</th>
                                                                  <th className="px-4 py-3 text-left">Role</th>
                                                                  <th className="px-4 py-3 text-center">Action</th>
                                                            </tr>
                                                      </thead>

                                                      <tbody>
                                                            {data.length === 0 && (
                                                                  <tr>
                                                                        <td
                                                                              colSpan="5"
                                                                              className="text-center py-6
                  text-gray-500 dark:text-slate-400"
                                                                        >
                                                                              No records found
                                                                        </td>
                                                                  </tr>
                                                            )}

                                                            {data.map((item, index) => (
                                                                  <tr
                                                                        key={item.id}
                                                                        className="border-t
                border-gray-200 dark:border-slate-700
                hover:bg-gray-50 dark:hover:bg-slate-700 transition"
                                                                  >
                                                                        <td className="px-4 py-3">{index + 1}</td>
                                                                        <td className="px-4 py-3">{item.name}</td>
                                                                        <td className="px-4 py-3">{item.mobile}</td>
                                                                        <td className="px-4 py-3">{item.role}</td>
                                                                        <td className="px-4 py-3 text-center">
                                                                              <button
                                                                                    onClick={() => handleEdit(item)}
                                                                                    className="text-blue-600 dark:text-blue-400 hover:underline"
                                                                              >
                                                                                    Edit
                                                                              </button>
                                                                        </td>
                                                                  </tr>
                                                            ))}
                                                      </tbody>
                                                </table>
                                          </div>
                                    </main>
                              </div>
                        </div>
                  </div>

                  {/* MODAL */}
                  <UserModal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                        form={form}
                        setForm={setForm}
                        onSubmit={handleSubmit}
                  />
            </>
      );
};

export default UsersTable;
