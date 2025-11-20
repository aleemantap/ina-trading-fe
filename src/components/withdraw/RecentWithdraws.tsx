export default function RecentWithdraws() {
  const data = [
    {
      amount: "$99.00",
      desc: "balance updated on Feb 15, 2022",
      ref: "01670468081",
    },
    {
      amount: "$38.00",
      desc: "balance updated on Feb 01, 2022",
      ref: "*******2341",
    },
    {
      amount: "$99.00",
      desc: "balance updated on Jan 15, 2022",
      ref: "01670248081",
    },
  ];

  return (
    <div className="w-full mt-10">
      {/* TITLE */}
      <h2 className="text-lg font-semibold text-gray-600">Recent withdraws</h2>
      <div className="border-b mt-1 mb-4"></div>

      {/* LIST */}
      <div className="space-y-4">
        {data.map((item, i) => (
          <div
            key={i}
            className="grid grid-cols-3 text-sm text-gray-700 items-center"
          >
            <div className="font-medium">{item.amount}</div>
            <div className="text-gray-500">{item.desc}</div>
            <div className="text-purple-500 text-right cursor-pointer hover:underline">
              {item.ref}
            </div>
          </div>
        ))}
      </div>

      {/* LOAD MORE */}
      <div className="flex justify-end mt-4">
        <button className="text-blue-500 text-sm hover:underline">
          Load more
        </button>
      </div>
    </div>
  );
}
