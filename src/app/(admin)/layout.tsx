"use client";

// import Link from "next/link";
import { ReactNode } from "react";
// import { LogOut, Settings, ShoppingBag, BarChart3 } from "lucide-react";
import DashboardLayout from  "../../components/layout/DashboardLayout";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <DashboardLayout>
        {children}
    </DashboardLayout>
  );
}
