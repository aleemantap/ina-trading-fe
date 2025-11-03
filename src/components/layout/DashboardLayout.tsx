"use client";

// import Link from "next/link";
import { ReactNode } from "react";
// import { LogOut, Settings, ShoppingBag, BarChart3 } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { AppDispatch } from "@/store/store";
// import { logout } from "../../../store/authSlice";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from  "../../store/store";

// import { Icons } from "../icons/index";
import NavLeft from "./NavLeft"
interface Props {
  children: ReactNode;
}

export default function DashboardLayout({ children }: Props) {

  const {
    user,
    //loading,
    //error,
  } = useSelector((state: RootState) => state.auth);

  //console.log("data2 =", user?.name)
  
    // const session = useSelector((state) => state);

  //  const dispatch = useDispatch<AppDispatch>();
  //  const router = useRouter();

  //  const handleLogout = () => {
  //   //  console.log("handleLogout");
  //    dispatch(logout());
  //    router.push("/login");
  //  };

  return (
    <div className="flex flex-col h-screen">
      {/* HEADER */}
      <header className="bg-[#be0000] text-white px-10 py-3 flex justify-between items-center h-11">
        <div className="flex items-center gap-2">
          <Image src="/logo-ina-merah.png" alt="Logo" width={55} height={55} />
        </div>

        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button className="hover:text-gray-200">
            <div className="relative">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                3
              </span>
            </div>
          </button>
          <div className="flex items-center space-x-2">
            <Image
              src="https://i.pravatar.cc/40"
              alt="Logo"
              width={30}
              height={30}
              className="rounded-full"
            />

            <span className="text-sm">{user?.name}</span>
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </header>
      <div className="bg-[#fff] text-white px-10 py-2 flex justify-between items-center"></div>
      {/* <div className="h-0">tsasd</div> */}

      {/* BODY: sidebar + main */}
      <div className="flex h-screen">
        <NavLeft />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-0 bg-white overflow-y-auto px-1">
          {children}
        </main>
      </div>
    </div>
  );
}
