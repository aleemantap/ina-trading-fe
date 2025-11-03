"use client";
import Link from "next/link";

export default function ShippingDetailCard() {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-gray-400 font-semibold text-sm">SHIPPING DETAIL</h3>
        <Link
          href="/dashboard/orders/1234"
          className="bg-sky-400 text-white rounded-full text-xs px-3 py-1 hover:bg-sky-500 transition inline-block"
        >
          Show order detail
        </Link>
      </div>

      <div className="text-sm text-gray-700 space-y-2">
        <div>
          <p className="text-gray-500 text-xs">Name</p>
          <p className="font-semibold">John Doe</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs">Address</p>
          <p className="font-normal leading-snug">
            Jalan Raya jakarta kota nomer 1.
            <br />
            kecamatan pancoran.
            <br />
            jakarta selatan
          </p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase">Email</p>
          <p className="font-semibold">JohnDoe@gmail.com</p>
        </div>
        <div>
          <p className="text-gray-500 text-xs uppercase">Phone</p>
          <p className="font-semibold">(671) 555-0110</p>
        </div>
      </div>
    </div>
  );
}
