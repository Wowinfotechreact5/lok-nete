const SuccessModal = ({ open, onClose }) => {
      if (!open) return null;

      return (
            <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
                  <div className="bg-white dark:bg-slate-800 text-gray-800 dark:text-slate-200 w-full max-w-sm rounded-lg shadow-lg">

                        <div className="p-6 text-center">
                              <div className="text-green-600 dark:text-green-400 text-3xl mb-3">
                                    ✓
                              </div>
                              <h3 className="text-lg font-semibold mb-1">Success</h3>
                              <p className="text-sm text-gray-600 dark:text-slate-400">
                                    User added successfully
                              </p>
                        </div>

                        <div className="flex justify-center px-6 py-4 border-t border-gray-200 dark:border-slate-700">
                              <button
                                    onClick={onClose}
                                    className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                              >
                                    OK
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default SuccessModal;
