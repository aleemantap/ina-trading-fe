export default function PendingWithdraws() {
  return (
    <div className="w-full mt-10">
      <h2 className="text-lg font-semibold text-gray-600">Pending withdraws</h2>
      <div className="border-b mt-1 mb-4"></div>

      <div className="bg-orange-50 text-gray-700 text-sm p-4 rounded-md">
        You have no pending withdraw request. No withdrawal
        (scheduled/requested) shall be processed if you have any request
        pending.
      </div>
    </div>
  );
}
