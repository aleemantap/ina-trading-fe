
export default function TransactionHistoryVendorPage() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-2">
        <h1 className="text-md">Scheduled withdraw $50.00</h1>
        <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
          <span className="text-xs text-gray-700">upcoming</span>
        </div>
      </div>
      <p className="text-gray-500 text-xs border-b-1 pb-1">
        View all your orders for which you have upcoming balance here.
      </p>
    </div>
  );
}
