"use client";
import Image from "next/image";

interface InvoiceHeaderProps {
  invoiceNumber: string;
}

export default function InvoiceHeader({ invoiceNumber }: InvoiceHeaderProps) {
  return (
    <div className="relative w-full">
      {/* SVG Polygon Background */}
      <div className="relative w-full h-20 bg-[#b80000] overflow-hidden">
        <svg
          className="absolute left-0 top-0 h-full"
          viewBox="0 0 400 80"
          preserveAspectRatio="none"
        >
          <polygon points="0,30 70,15 130,15 70,35 0,50" fill="#b80000" />
        </svg>

        {/* Logo */}
        <div className="absolute left-12 top-1/2 -translate-y-1/2 flex items-center">
          <Image
            src="/logo-ina-trading.png" // ganti sesuai path logo kamu
            alt="INA Trading Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>

      {/* Invoice text */}
      <div className="absolute right-8 bottom-0 flex items-end space-x-3">
        <span className="font-extrabold text-xl text-gray-800">INVOICE</span>
        <span className="text-[#3a8a9e] font-semibold text-lg">
          {invoiceNumber}
        </span>
      </div>
    </div>
  );
}
