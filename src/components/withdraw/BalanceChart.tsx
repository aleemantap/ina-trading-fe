"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const chartData = months.map((m) => ({
  month: m,
  balance: Math.floor(Math.random() * 1200),
}));

export default function BalanceChart() {
  const [range, setRange] = useState({ start: "Jan", end: "Dec" });

  return (
    <div className="w-full h-full bg-white rounded-xl p-6">
      {/* DATE RANGE */}
      <div className="flex items-center justify-end gap-3 mb-4">
        <select
          value={range.start}
          onChange={(e) => setRange({ ...range, start: e.target.value })}
          className="border px-3 py-2 rounded-md text-sm"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <span className="text-gray-600 text-sm">to</span>

        <select
          value={range.end}
          onChange={(e) => setRange({ ...range, end: e.target.value })}
          className="border px-3 py-2 rounded-md text-sm"
        >
          {months.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* CHART */}
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis domain={[0, 1200]} />
            <Tooltip />
            <Bar dataKey="balance" fill="#3b82f6" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
