"use client";

import { useState } from "react";
import { Search, Filter, MoreHorizontal } from "lucide-react";
import ActionMenu from "./ActionMenu";

interface RowData {
  type: string;
  amount: string;
  status: string;
  statusColor: string;
  date: string;
  notes?: string;
}

export default function TransactionTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 10;

  // --- 20 dummy data ---
  const data: RowData[] = Array.from({ length: 20 }).map((_, i) => ({
    type: i % 2 === 0 ? "Scheduled withdraw" : "Manual withdraw",
    amount: `$${(40 + i * 2).toFixed(2)}`,
    status: i % 3 === 0 ? "completed" : i % 3 === 1 ? "upcoming" : "pending",
    statusColor:
      i % 3 === 0
        ? "bg-green-400"
        : i % 3 === 1
        ? "bg-yellow-300"
        : "bg-gray-400",
    date: `Mar ${1 + i}, 2022`,
    notes: i % 4 === 0 ? "No issues" : "",
  }));

  // --- Filter berdasarkan search ---
  const filtered = data.filter((row) =>
    row.type.toLowerCase().includes(search.toLowerCase())
  );

  // --- Paging ---
  const totalPages = Math.ceil(filtered.length / pageSize);

  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="mt-6 w-full">
      {/* Search + Filter */}
      <div className="flex justify-between items-center mb-3">
        <div className="relative w-64">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="pl-10 pr-3 py-2 w-full border rounded-md text-sm outline-none"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />
        </div>

        <button className="flex items-center gap-2 border px-4 py-2 rounded-md text-sm hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      {/* Table */}
      <div className="border rounded-md overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-white border-b">
              <th className="text-left py-3 px-4 text-gray-500">TYPE</th>
              <th className="text-left py-3 px-4 text-gray-500">AMOUNT</th>
              <th className="text-left py-3 px-4 text-gray-500">STATUS</th>
              <th className="text-left py-3 px-4 text-gray-500">DATE</th>
              <th className="text-left py-3 px-4 text-gray-500">NOTES</th>
              <th className="text-left py-3 px-4 text-gray-500">ACTION</th>
            </tr>
          </thead>

          <tbody>
            {pageData.map((row, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4 text-blue-600">{row.type}</td>
                <td className="py-3 px-4">{row.amount}</td>

                <td className="py-3 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${row.statusColor}`}
                    ></span>
                    <span className="text-gray-700">{row.status}</span>
                  </div>
                </td>

                <td className="py-3 px-4">{row.date}</td>

                <td className="py-3 px-4 text-gray-500">{row.notes || "-"}</td>

                <td className="py-3 px-4">
                  <ActionMenu />
                  {/* <MoreHorizontal className="h-5 w-5 cursor-pointer text-gray-500 hover:text-black" /> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Pagination --- */}
      <div className="flex justify-between items-center mt-4 text-sm">
        <span className="text-gray-500">
          Page {page} of {totalPages}
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className={`px-3 py-1 border rounded-md ${
              page === 1
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            Prev
          </button>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className={`px-3 py-1 border rounded-md ${
              page === totalPages
                ? "text-gray-300 border-gray-200 cursor-not-allowed"
                : "hover:bg-gray-50"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
