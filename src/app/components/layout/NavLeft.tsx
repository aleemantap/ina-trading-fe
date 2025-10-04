"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // helper untuk gabung class (optional)
import { FaChartPie, FaBox, FaShoppingCart, FaCog } from "react-icons/fa";
import { Home, Package, ShoppingCart, Settings, LogOut } from "lucide-react";
import { BiSignal3 } from "react-icons/bi";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiProductHuntLine } from "react-icons/ri";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import product from "../../../assets/product.png";
import overview from "../../../assets/overview.png";
import checkout from "../../../assets/checkout.png";
import setting from "../../../assets/setting.png";
import Info from "../../../assets/info.png";
import contact from "../../../assets/contact.png";
import signout from "../../../assets/logout.png";

import Image from "next/image";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { logout } from "../../../store/authSlice";
const menuItems = [
  { name: "Overview", href: "/dashboard", icon: overview },
  {
    name: "Product",
    href: "/dashboard/product",
    icon: product,
    children: [
      { name: "Post Product", href: "/dashboard/product/post" },
      { name: "List Product", href: "/dashboard/product/list" },
    ],
  },
  { name: "Orders", href: "/dashboard/orders", icon: checkout, badge: 3 },
  { name: "Setting", href: "/dashboard/setting", icon: setting },
];

export default function NavLeft() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
  const handleLogout = () => {
      dispatch(logout());
      router.push("/login");
  };
  
  const toggleMenu = (name: string) => {
     setOpenMenu(openMenu === name ? null : name);
   };

  
  return (
    <aside className="ml-5 w-64 border-r bg-white min-h-screen flex flex-col justify-between">
      <nav className="flex flex-col">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <div key={item.name}>
              {/* Kalau ada children → pakai button */}
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.name)}
                    className={`relative flex w-full items-center justify-between gap-3 px-4 py-3 text-gray-600 hover:text-red-600 ${
                      isActive ? "text-red-600 font-semibold" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* <Icon className="w-5 h-5" /> */}
                      <Image
                        className="cursor-pointer w-5 md:w-5"
                        onClick={() => router.push("/")}
                        src={Icon}
                        alt="icon"
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>
                      {openMenu === item.name ? (
                        <FiChevronDown className="w-4 h-4" />
                      ) : (
                        <FiChevronRight className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Submenu */}
                  {openMenu === item.name && (
                    <div className="ml-10 flex flex-col border-l border-gray-200">
                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href;
                        return (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={`px-3 py-2 text-sm text-gray-600 hover:text-red-600 ${
                              isChildActive ? "text-red-600 font-semibold" : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                // Kalau tidak ada children → langsung Link
                <Link
                  href={item.href}
                  className={`relative flex w-full items-center gap-3 px-4 py-3 text-gray-600 hover:text-red-600 ${
                    isActive ? "text-red-600 font-semibold" : ""
                  }`}
                >
                  {/* <Icon className="w-5 h-5" /> */}
                  <Image
                    className="cursor-pointer w-5 md:w-5"
                    onClick={() => router.push("/")}
                    src={Icon}
                    alt="icon"
                  />
                  <span>{item.name}</span>

                  {/* Border aktif */}
                  {isActive && (
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[70%] w-1 bg-red-600 rounded-l"></span>
                  )}
                </Link>
              )}
            </div>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 flex flex-col gap-2 border-t">
        <button className="flex items-center gap-2 text-sm text-gray-600">
          <Image
            className="cursor-pointer w-5 md:w-5"
            onClick={() => router.push("/")}
            src={Info}
            alt="Help Center"
          />{" "}
          Help Centre
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-600">
          <Image
            className="cursor-pointer w-5 md:w-5"
            onClick={() => router.push("/")}
            src={contact}
            alt="Contact"
          />{" "}
          Contact Us
        </button>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-500"
        >
          <Image
            className="cursor-pointer w-5 md:w-5"
            onClick={() => router.push("/")}
            src={signout}
            alt="signout"
          />{" "}
          Log out
        </button>
      </div>
    </aside>
  );
}
