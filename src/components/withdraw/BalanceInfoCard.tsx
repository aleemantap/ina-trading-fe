export default function BalanceInfoCard({ onWithdraw }: { onWithdraw: () => void }) {
  return (
    <div className="w-full h-full bg-white rounded-xl p-6 text-gray-700">
      {/* CURRENT BALANCE */}
      <div>
        <h2 className="text-lg font-semibold text-gray-500">Current balance</h2>
        <div className="flex items-center justify-between mt-2">
          <p className="text-3xl font-bold text-gray-900">$1200</p>
          <button
            onClick={onWithdraw}
            className="px-4 py-2 border border-purple-400 text-purple-500 rounded-lg hover:bg-purple-50 text-sm"
          >
            Withdraw
          </button>
        </div>

        <div className="text-sm mt-5 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-500">Minimum Balance</span>
            <span className="font-medium">$50.00</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Account payable</span>
            <span className="text-blue-500 hover:underline cursor-pointer">
              vendor2@paypal.com
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Withdraw Schedule</span>
            <span className="text-blue-500 hover:underline cursor-pointer">
              Once a month
            </span>
          </div>
        </div>
      </div>

      {/* UPCOMING BALANCE */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold text-gray-500">
          Upcoming balance
        </h3>

        <p className="text-3xl font-bold text-gray-900 mt-2">$200</p>

        <div className="mt-3">
          <p className="text-blue-500 hover:underline cursor-pointer text-sm">
            vendor2@paypal.com
          </p>
          <p className="text-gray-500 text-xs">(account payable)</p>

          <button className="text-blue-500 text-sm mt-1 hover:underline">
            change
          </button>
        </div>
      </div>
    </div>
  );
}
