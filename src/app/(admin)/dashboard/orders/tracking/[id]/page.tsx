"use client";

import TrackingOrderPage from "@/components/orders/TrackingOrderPage";
import { Search } from "lucide-react";
import { useState } from "react";
import React from "react";

// export default function TrackingPage({ params }: { params: { id: string } }) {
export default function TrackingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  
  const { id } = React.use(params);

  // return <TrackingOrderPage orderId={params.id} />;
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching orders for:", query);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between  mt-5 ">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

        <div className="flex items-center space-x-2">
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-1 w-72">
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all orders"
              className="w-full outline-none text-sm"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-500 text-white text-sm  px-3 py-1 rounded-full hover:bg-blue-600 transition"
          >
            Search Orders
          </button>
        </div>
      </div>
      <TrackingOrderPage orderId={id} />
    </div>
  );
}
