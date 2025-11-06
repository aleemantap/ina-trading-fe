"use client";
export const dynamic = "force-dynamic";

// import { Card, CardContent } from "@/components/ui/card";
import OrdersTabs from "../../../../components/orders/OrdersTabs"; //"../../../../components/OrdersTabs";
import OrdersFilter from "../../../../components/orders/OrdersFilter";
import ShippingDetailCard from "@/components/orders/ShippingDetailCard";
import OrderDetailCard from "@/components/orders/OrderDetailCard";
import OrderSummaryCard from "@/components/orders/OrderSummaryCard";
import { Search } from "lucide-react";
import { useState } from "react";

export default function OrdersPage() {
  const [activeTab, setActiveTab] = useState("orders");

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
            className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Search Orders
          </button>
        </div>
      </div>
      <OrdersTabs onTabChange={setActiveTab} />

      {/* Filter hanya muncul jika tab "orders" aktif */}
      {activeTab === "orders" && <OrdersFilter />}

      {/* Konten tab */}
      <div className="mt-6 text-gray-600 text-sm">
        {activeTab === "orders" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <ShippingDetailCard />
              <OrderDetailCard />
              <OrderSummaryCard
                id="1234"
                total="365.00"
                shipping="Post Indonesia"
                awb="awb1234556"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
              <ShippingDetailCard />
              <OrderDetailCard />
              <OrderSummaryCard
                id="1234"
                total="365.00"
                shipping="Post Indonesia"
                awb="awb1234556"
              />
            </div>
          </>
        )}
        {activeTab === "waiting" && <p>Waiting confirmation orders...</p>}
        {activeTab === "not-yet-shipped" && <p>Orders not yet shipped...</p>}
        {activeTab === "shipped" && <p>Shipped orders...</p>}
        {activeTab === "cancelled" && <p>Cancelled orders...</p>}
        {activeTab === "completed" && <p>Completed orders...</p>}
      </div>
    </div>
  );
}
