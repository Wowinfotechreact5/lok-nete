const UserModal = ({ open, onClose, form, setForm, onSubmit }) => {
      if (!open) return null;

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
                                    <label className="block text-sm mb-1">Name</label>
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
                                    onClick={onSubmit}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                    Save
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default UserModal;
