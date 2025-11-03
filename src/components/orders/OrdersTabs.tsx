"use client";

import { useState } from "react";

interface OrdersTabsProps {
  onTabChange?: (tabId: string) => void;
}

const tabs = [
  { id: "orders", label: "Orders" },
  { id: "waiting", label: "Waiting Confirmation" },
  { id: "not-yet-shipped", label: "Not Yet Shipped" },
  { id: "shipped", label: "Shipped" },
  { id: "cancelled", label: "Cancelled Orders" },
  { id: "completed", label: "Completed" },
];

export default function OrdersTabs({ onTabChange }: OrdersTabsProps) {
  const [activeTab, setActiveTab] = useState("orders");

  const handleClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId); // kirim ke parent
  };

  return (
    <div className="border-b border-gray-200">
      <div className="flex space-x-6 text-sm font-medium text-gray-500">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleClick(tab.id)}
            className={`relative pb-2 transition-colors ${
              activeTab === tab.id
                ? "text-black font-semibold"
                : "text-blue-400 hover:text-blue-600"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
