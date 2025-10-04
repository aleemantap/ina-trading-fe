"use client";

import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="w-full h-14 bg-white shadow flex items-center justify-between px-6">
      {/* Search */}
      <div className="flex items-center gap-2 text-gray-500">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <Bell className="text-gray-500" size={20} />
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium">Wira Basalamah</span>
        </div>
      </div>
    </header>
  );
}
