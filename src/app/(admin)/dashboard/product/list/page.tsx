"use client";

import DataTable from "./DataTable";
export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">List Your Product</h1>
      <div className="grid gap-4"></div>
      <DataTable />
    </div>
  );
}
