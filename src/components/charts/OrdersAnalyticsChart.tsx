"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", orders: 400 },
  { name: "Feb", orders: 300 },
  { name: "Mar", orders: 600 },
  { name: "Apr", orders: 800 },
  { name: "May", orders: 700 },
  { name: "Jun", orders: 1000 },
];

export default function OrdersAnalyticsChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="orders"
          stroke="#ef4444"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
