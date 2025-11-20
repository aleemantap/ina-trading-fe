"use client";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function RequestForWithdrawModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white w-full max-w-2xl rounded-xl p-6">
        {/* TITLE */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Request For Withdrawal
        </h2>
        <div className="border-b mb-6"></div>

        <div className="grid grid-cols-3 gap-6 text-sm text-gray-700">
          {/* LEFT LABELS */}
          <div className="space-y-6 text-gray-600">
            <p>Available Balance</p>
            <p>Amount to withdraw</p>
            <p>Withdraw into</p>
            <p>Notes</p>
            <p>Withdrawal fee</p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-2 space-y-6">
            <p className="font-medium">$1200.00</p>

            <input
              type="text"
              placeholder="$"
              className="w-full border rounded-md px-3 py-2"
            />

            {/* PayPal */}
            <div className="flex items-center gap-3">
              <img
                src="/paypal.png"
                alt="paypal"
                className="w-6 h-6 object-contain"
              />
              <span className="text-blue-600 font-medium">
                vendor2@paypal.com
              </span>
              <button className="text-blue-500 hover:underline ml-3">
                change
              </button>
            </div>

            {/* Notes */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500">No notes (optional)</span>
              <button className="text-blue-500 hover:underline">edit</button>
            </div>

            {/* Fee */}
            <p className="font-medium">$2.50</p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button className="px-6 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700">
            Withdraw
          </button>
        </div>
      </div>
    </div>
  );
}
