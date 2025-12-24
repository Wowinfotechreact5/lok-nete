import React, { useState } from "react";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";

const ProfilePage = () => {
      const [sidebarOpen, setSidebarOpen] = useState(false);

      return (

            <div className="flex h-screen overflow-hidden">

                  {/* Sidebar */}
                  <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                  {/* Content area */}
                  <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

                        {/*  Site header */}
                        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                        <main className="grow">
                              <div className="min-h-screen bg-gray-100 dark:bg-slate-900 px-6 py-8">
                                    <div className="max-w-7xl mx-auto space-y-8">

                                          {/* ===== IDENTITY HEADER ===== */}
                                          <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden">

                                                {/* Institutional Banner */}
                                                <div className="h-40 bg-gradient-to-r 
  from-[#8470ff] 
  via-[#6b5be2] 
  to-[#2e2a55] 
  flex items-center px-8">
                                                      <div className="flex items-center gap-6">
                                                            {/* Emblem / Party Symbol */}
                                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center font-bold text-red-700">
                                                                  LOGO
                                                            </div>

                                                            <div>
                                                                  <h1 className="text-2xl font-bold text-white tracking-wide">
                                                                        Sandeep Kumar
                                                                  </h1>
                                                                  <p className="text-sm text-white/80">
                                                                        Public Representative · State Committee Member
                                                                  </p>
                                                            </div>
                                                      </div>
                                                </div>

                                                {/* Profile Core */}
                                                <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">

                                                      {/* Profile Photo */}
                                                      <div className="flex flex-col items-center">
                                                            <img
                                                                  src="https://th.bing.com/th/id/OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                                                                  alt="Leader"
                                                                  className="w-36 h-36 rounded-lg border-4 border-white dark:border-slate-800 shadow-md -mt-20 bg-white"
                                                            />
                                                            <span className="mt-3 px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">
                                                                  Active Mandate
                                                            </span>
                                                      </div>

                                                      {/* Official Details */}
                                                      <div className="md:col-span-2 space-y-4">
                                                            <div>
                                                                  <p className="text-xs uppercase tracking-wider text-gray-500">
                                                                        Designation
                                                                  </p>
                                                                  <p className="font-semibold text-gray-800 dark:text-white">
                                                                        Constituency In-Charge
                                                                  </p>
                                                            </div>

                                                            <div>
                                                                  <p className="text-xs uppercase tracking-wider text-gray-500">
                                                                        Constituency
                                                                  </p>
                                                                  <p className="font-semibold text-gray-800 dark:text-white">
                                                                        Ward 18 · South District
                                                                  </p>
                                                            </div>

                                                            <div>
                                                                  <p className="text-xs uppercase tracking-wider text-gray-500">
                                                                        Party Affiliation
                                                                  </p>
                                                                  <p className="font-semibold text-gray-800 dark:text-white">
                                                                        National Democratic Alliance
                                                                  </p>
                                                            </div>
                                                      </div>

                                                      {/* Authority Metrics */}
                                                      <div className="grid grid-cols-2 gap-4 text-center">
                                                            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                                                                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                                                                        12
                                                                  </p>
                                                                  <p className="text-xs text-gray-500">Years Service</p>
                                                            </div>
                                                            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                                                                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                                                                        6
                                                                  </p>
                                                                  <p className="text-xs text-gray-500">Campaigns Led</p>
                                                            </div>
                                                            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                                                                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                                                                        1.2L
                                                                  </p>
                                                                  <p className="text-xs text-gray-500">People Reached</p>
                                                            </div>
                                                            <div className="bg-gray-50 dark:bg-slate-700 rounded-lg p-4">
                                                                  <p className="text-xl font-bold text-gray-800 dark:text-white">
                                                                        98%
                                                                  </p>
                                                                  <p className="text-xs text-gray-500">Trust Index</p>
                                                            </div>
                                                      </div>

                                                </div>
                                          </div>

                                          {/* ===== PUBLIC STATEMENT ===== */}
                                          <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
                                                <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                                                      Public Commitment
                                                </h2>
                                                <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-300">
                                                      Dedicated to transparent governance, grassroots development,
                                                      and policy-driven leadership. Committed to addressing public
                                                      concerns with integrity, accountability, and measurable action.
                                                </p>
                                          </div>

                                          {/* ===== RESPONSIBILITY & PERFORMANCE ===== */}
                                          <div className="grid md:grid-cols-2 gap-6">

                                                {/* Key Responsibilities */}
                                                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
                                                      <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
                                                            Key Responsibilities
                                                      </h3>
                                                      <ul className="space-y-3 text-sm text-gray-600 dark:text-slate-300 list-disc list-inside">
                                                            <li>Constituency grievance redressal</li>
                                                            <li>Policy implementation monitoring</li>
                                                            <li>Public outreach & town halls</li>
                                                            <li>Volunteer & booth management</li>
                                                      </ul>
                                                </div>

                                                {/* Performance Indicators */}
                                                <div className="bg-white dark:bg-slate-800 rounded-xl shadow p-6">
                                                      <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-4">
                                                            Performance Indicators
                                                      </h3>

                                                      {[
                                                            { label: "Public Engagement", value: "92%" },
                                                            { label: "Issue Resolution", value: "88%" },
                                                            { label: "Policy Execution", value: "81%" },
                                                      ].map((item) => (
                                                            <div key={item.label} className="mb-4">
                                                                  <div className="flex justify-between text-xs mb-1">
                                                                        <span className="text-gray-600 dark:text-slate-300">
                                                                              {item.label}
                                                                        </span>
                                                                        <span className="text-gray-500">{item.value}</span>
                                                                  </div>
                                                                  <div className="h-2 bg-gray-200 dark:bg-slate-700 rounded">
                                                                        <div
                                                                              className="h-2 bg-red-600 rounded"
                                                                              style={{ width: item.value }}
                                                                        />
                                                                  </div>
                                                            </div>
                                                      ))}
                                                </div>

                                          </div>

                                          {/* ===== ACTION BAR ===== */}
                                          <div className="flex justify-end gap-4">
                                                <button className="px-6 py-2 rounded-md border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700">
                                                      View Reports
                                                </button>
                                                <button className="px-6 py-2 rounded-md bg-red-600 text-white font-medium hover:bg-red-700">
                                                      Update Profile
                                                </button>
                                          </div>

                                    </div>
                              </div>
                        </main>
                  </div>
            </div>


      );
};

export default ProfilePage;
