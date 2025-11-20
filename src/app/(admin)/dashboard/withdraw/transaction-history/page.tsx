
import TransactionTable from "@/components/withdraw/TransactionTable";

export default function TransactionHistoryPage() {
  return (
    <div className="p-6">
      <h1 className="text-md">Transaction history</h1>
      <p className="text-gray-500 text-xs border-b-1 pb-1">
        View all your site transaction here.
      </p>
      <div className="flex justify-end">
        <div className="flex flex-col items-end leading-tight text-md">
          <span className="text-gray-500">Balance</span>
          <span className="text-xl">$1040.00</span>
        </div>
      </div>
      <TransactionTable />
    </div>
  );
}
