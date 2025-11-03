"use client";

export default function OrderDetailCard() {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-gray-400 font-semibold text-sm mb-3">ORDER DETAIL</h3>

      <div className="text-sm text-gray-600 space-y-2">
        <div className="flex justify-between">
          <span>Product Ordered</span>
          <span className="font-semibold">2</span>
        </div>
        <div className="flex justify-between">
          <span>Order Time</span>
          <span className="font-semibold">18-Sept-2025 10:10:10</span>
        </div>
        <div className="flex justify-between">
          <span>Order Expired Time</span>
          <span className="font-semibold">20-Sept-2025 10:10:10</span>
        </div>
        <div className="flex justify-between">
          <span>Total Weight</span>
          <span className="font-semibold">2000 gr</span>
        </div>
        <div className="flex justify-between">
          <span>Total Dimension</span>
          <span className="font-semibold">30x20x30 cm</span>
        </div>
      </div>
    </div>
  );
}
