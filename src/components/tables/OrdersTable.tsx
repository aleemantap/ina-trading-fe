"use client";

interface Order {
  id: string;
  date: string;
  customer: string;
  location: string;
  amount: string;
  status: "New Order" | "On Delivery" | "Refunded";
}

const orders: Order[] = [
  {
    id: "#12594",
    date: "Dec 1, 2021",
    customer: "Frank Murlo",
    location: "312 S Wilmette Ave",
    amount: "$847.69",
    status: "New Order",
  },
  {
    id: "#12490",
    date: "Nov 15, 2021",
    customer: "Thomas Bleir",
    location: "Lathrop Ave, Harvey",
    amount: "$477.14",
    status: "On Delivery",
  },
  {
    id: "#12306",
    date: "Nov 2, 2021",
    customer: "Bill Norton",
    location: "5685 Bruce Ave, Portage",
    amount: "$477.14",
    status: "On Delivery",
  },
];

export default function OrdersTable() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h3 className="text-lg font-semibold mb-4">Order List</h3>
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-3 py-2">No</th>
            <th className="px-3 py-2">ID</th>
            <th className="px-3 py-2">Date</th>
            <th className="px-3 py-2">Customer</th>
            <th className="px-3 py-2">Location</th>
            <th className="px-3 py-2">Amount</th>
            <th className="px-3 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="px-3 py-2">{index + 1}</td>
              <td className="px-3 py-2">{order.id}</td>
              <td className="px-3 py-2">{order.date}</td>
              <td className="px-3 py-2">{order.customer}</td>
              <td className="px-3 py-2">{order.location}</td>
              <td className="px-3 py-2">{order.amount}</td>
              <td className="px-3 py-2">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    order.status === "New Order"
                      ? "bg-green-100 text-green-600"
                      : order.status === "On Delivery"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
