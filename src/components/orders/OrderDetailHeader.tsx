import React from "react";

interface OrderDetailHeaderProps {
  orderId: string;
  shippingType: string;
}

export default function OrderDetailHeader({
  orderId,
  shippingType,
}: OrderDetailHeaderProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Your Order detail</h1>

      <div className="flex items-center space-x-3 mt-1">
        <span className="text-xs text-gray-400 font-semibold uppercase">
          ORDER ID: #{orderId}
        </span>
        <a
          href="#"
          className="text-sm text-sky-500 hover:underline font-medium"
        >
          {shippingType}
        </a>
      </div>
    </div>
  );
}
