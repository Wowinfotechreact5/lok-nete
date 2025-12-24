import { useState } from "react";

const AddUserModal = ({ open, onClose, onSuccess }) => {
      const [name, setName] = useState("");
      const [errors, setErrors] = useState({});

      if (!open) return null;

      const handleSubmit = () => {
            let newErrors = {};

            if (!name.trim()) {
                  newErrors.name = "This field is required";
            }

            if (Object.keys(newErrors).length > 0) {
                  setErrors(newErrors);
                  return;
            }

            // clear error & input
            setErrors({});
            setName("");

            // success callback
            onSuccess();
      };

      return (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 w-full max-w-lg rounded-lg shadow-lg">

                        {/* Header */}
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-slate-700">
                              <h2 className="text-lg font-semibold">Add User</h2>
                              <button
                                    onClick={() => {
                                          setErrors({});
                                          setName("");
                                          onClose();
                                    }}
                                    className="text-gray-500 dark:text-slate-400"
                              >
                                    ✕
                              </button>
                        </div>

                        {/* Body */}
                        <div className="p-6">
                              <label className="block text-sm mb-1">User Name</label>

                              <input
                                    value={name}
                                    placeholder="Enter User Name"
                                    onChange={(e) => {
                                          setName(e.target.value);

                                          // remove error while typing
                                          if (errors.name) {
                                                setErrors({ ...errors, name: "" });
                                          }
                                    }}
                                    className={`w-full px-3 py-2 rounded border
              bg-white dark:bg-slate-700
              ${errors.name
                                                ? "border-red-500 dark:border-red-500"
                                                : "border-gray-300 dark:border-slate-600"}
              text-gray-800 dark:text-slate-200`}
                              />

                              {/* Error Message */}
                              {errors.name && (
                                    <p className="text-xs text-red-500 mt-1">
                                          {errors.name}
                                    </p>
                              )}
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-200 dark:border-slate-700">
                              <button
                                    onClick={() => {
                                          setErrors({});
                                          setName("");
                                          onClose();
                                    }}
                                    className="px-4 py-2 border rounded border-gray-300 dark:border-slate-600"
                              >
                                    Cancel
                              </button>

                              <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                              >
                                    Submit
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default AddUserModal;
