"use client";

import React from "react";
import Link from "next/link";

interface OrderSummaryCardProps {
  id: string;
  total: string;
  shipping: string;
  awb: string;
}

export default function OrderSummaryCard({
  id,
  total,
  shipping,
  awb,
}: OrderSummaryCardProps) {
  return (
    <div className="border rounded-lg p-4 flex flex-col justify-between shadow-sm">
      <div>
        <div className="flex justify-between text-sm text-gray-400 font-semibold mb-2">
          <span>ORDER ID: #{id}</span>
          <a href="#" className="text-sky-500 hover:underline">
            Domestic
          </a>
        </div>

        <div className="text-gray-600 text-sm space-y-2">
          <div className="flex justify-between">
            <span>Total :</span>
            <span className="font-semibold">${total}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold">{shipping}</span>
          </div>
          <div className="flex justify-between">
            <span>AWB</span>
            <span className="font-semibold">{awb}</span>
          </div>
        </div>
      </div>

      <div className="border-t mt-4 pt-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-600">Total</span>
          <span className="text-green-600 font-bold">${total}</span>
        </div>
        <Link
          href={`/dashboard/orders/tracking/222`}
          //href={`/orders/tracking/${order.id}`} // contoh: bisa pakai id order
          className="bg-green-500 text-white rounded-full text-xs px-3 py-1 hover:bg-sky-500 transition"
        >
          Track your order
        </Link>
      </div>
    </div>
  );
}
