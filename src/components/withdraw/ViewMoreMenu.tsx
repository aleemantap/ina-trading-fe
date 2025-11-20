"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function ViewMoreMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md text-sm font-medium"
      >
        View More
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-20">
          <ul className="py-1 text-sm text-gray-700">
            <li>
              <Link
                href="/dashboard/withdraw/transaction-history"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Transaction history
              </Link>
            </li>
            <li>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">
                Withdraw Setting
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
