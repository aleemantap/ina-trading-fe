"use client";

import { Home, Package, ShoppingCart, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { logout } from   "../../../store/authSlice";

export default function Sidebar() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  // sementara hardcode 2, nanti bisa ambil dari API redux state
  const ordersCount = 2;

  return (
    <aside className="w-64 h-screen bg-white shadow-lg flex flex-col">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold text-red-600">INA TRADING</h1>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Home size={18} /> Overview
        </Link>

        <Link
          href="/dashboard/products"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Package size={18} /> Product
        </Link>

        <Link
          href="/dashboard/orders"
          className="flex items-center justify-between p-2 rounded hover:bg-gray-100"
        >
          <div className="flex items-center gap-2">
            <ShoppingCart size={18} /> Orders
          </div>

          {/* Badge Notifikasi */}
          {ordersCount > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
              {ordersCount}
            </span>
          )}
        </Link>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
        >
          <Settings size={18} /> Setting
        </Link>
      </nav>

      <div className="p-4 border-t">
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 text-red-600 rounded hover:bg-red-50 w-full"
        >
          <LogOut size={18} /> Log out
        </button>
      </div>
    </aside>
  );
}
