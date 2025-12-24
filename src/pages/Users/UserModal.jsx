import { useState } from "react";
import AddUserModal from "./AddUserModal";
import SuccessModal from "../../SuccessModal";

const UserModal = ({ open, onClose, form, setForm, onSubmit }) => {
      if (!open) return null;
      const [addUserOpen, setAddUserOpen] = useState(false);
      const [successOpen, setSuccessOpen] = useState(false);
      const [errorOpen, setErrorOpen] = useState(false);
      const [errors, setErrors] = useState({});
      const handleSave = () => {
            let newErrors = {};

            if (!form.name || !form.name.trim()) {
                  newErrors.name = "This field is required";
            }

            if (Object.keys(newErrors).length > 0) {
                  setErrors(newErrors);
                  return;
            }

            // ✅ clear errors
            setErrors({});

            // ✅ continue submit logic
            onSubmit();
      };

      return (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                  <div
                        className="bg-white dark:bg-slate-800
        text-gray-800 dark:text-slate-200
        w-full max-w-3xl rounded-lg shadow-lg"
                  >
                        {/* Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                              <h2 className="text-lg font-semibold">Update User</h2>
                              <button
                                    onClick={onClose}
                                    className="text-gray-500 dark:text-slate-400"
                              >
                                    ✕
                              </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 max-h-[70vh] overflow-y-auto grid grid-cols-2 gap-4">

                              <div>
                                    <div className="flex items-center justify-between mb-1">
                                          <label className="block text-sm">
                                                Name
                                          </label>

                                          <button
                                                type="button"
                                                onClick={() => setAddUserOpen(true)}
                                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                          >
                                                + Add User
                                          </button>
                                    </div>

                                    <input
                                          value={form.name || ""}
                                          onChange={(e) =>
                                                setForm({ ...form, name: e.target.value })
                                          }
                                          className="w-full px-3 py-2 rounded border
      bg-white dark:bg-slate-700
      border-gray-300 dark:border-slate-600
      text-gray-800 dark:text-slate-200"
                                    />
                              </div>



                              <div>
                                    <label className="block text-sm mb-1">Mobile</label>
                                    <input
                                          value={form.mobile || ""}
                                          onChange={(e) =>
                                                setForm({ ...form, mobile: e.target.value })
                                          }
                                          className="w-full px-3 py-2 rounded border
              bg-white dark:bg-slate-700
              border-gray-300 dark:border-slate-600
              text-gray-800 dark:text-slate-200"
                                    />
                              </div>

                              <div>
                                    <label className="block text-sm mb-1">Email</label>
                                    <input
                                          value={form.email || ""}
                                          onChange={(e) =>
                                                setForm({ ...form, email: e.target.value })
                                          }
                                          className="w-full px-3 py-2 rounded border
              bg-white dark:bg-slate-700
              border-gray-300 dark:border-slate-600
              text-gray-800 dark:text-slate-200"
                                    />
                              </div>

                              <div>
                                    <label className="block text-sm mb-1">Role</label>
                                    <input
                                          value={form.role || ""}
                                          onChange={(e) =>
                                                setForm({ ...form, role: e.target.value })
                                          }
                                          className="w-full px-3 py-2 rounded border
              bg-white dark:bg-slate-700
              border-gray-300 dark:border-slate-600
              text-gray-800 dark:text-slate-200"
                                    />
                              </div>

                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-200 dark:border-slate-700">
                              <button
                                    onClick={onClose}
                                    className="px-4 py-2 border rounded
            border-gray-300 dark:border-slate-600"
                              >
                                    Cancel
                              </button>
                              <button
                                    onClick={handleSave}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                    Save
                              </button>
                        </div>
                  </div>
                  <AddUserModal
                        open={addUserOpen}
                        onClose={() => setAddUserOpen(false)}
                        onSuccess={() => {
                              // ✅ ONLY close AddUserModal
                              setAddUserOpen(true);
                              // ✅ OPEN success modal
                              setSuccessOpen(true);
                        }}
                  />

                  {/* SUCCESS MODAL */}
                  <SuccessModal
                        open={successOpen}
                        onClose={() => {
                              // ✅ Close success modal
                              setSuccessOpen(false);
                              // ✅ Ensure add user modal is closed
                              setAddUserOpen(false);
                              // ❌ DO NOT close UserModal
                        }}
                  />
            </div>
      );
};

export default UserModal;
