"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function OrdersFilter() {
  const [selected, setSelected] = useState("Today");
  const options = ["Today", "Last 7 Days", "Last 30 Days", "This Year"];

  return (
    <div className="flex items-center space-x-2 mt-4">
      <p className="text-sm">
        <span className="font-semibold">0 orders</span> placed in
      </p>

      <div className="relative">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="appearance-none bg-gray-100 border border-gray-300 rounded-md px-3 py-1 pr-6 text-sm focus:outline-none cursor-pointer"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
      </div>
    </div>
  );
}
