"use client";

import { useState, useRef, useEffect } from "react";
import { FileText, Eye, MoreHorizontal } from "lucide-react";

export default function ActionMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1 hover:bg-gray-100 rounded"
      >
        <MoreHorizontal className="h-5 w-5 text-gray-600" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md z-20">
          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm"
            onClick={() => {
              setOpen(false);
              alert("View Invoice clicked");
            }}
          >
            <FileText className="h-4 w-4 text-gray-600" />
            View invoice
          </button>

          <button
            className="flex items-center gap-2 px-3 py-2 hover:bg-gray-50 w-full text-sm"
            onClick={() => {
              setOpen(false);
              alert("View Detail clicked");
            }}
          >
            <Eye className="h-4 w-4 text-gray-600" />
            View detail
          </button>
        </div>
      )}
    </div>
  );
}
