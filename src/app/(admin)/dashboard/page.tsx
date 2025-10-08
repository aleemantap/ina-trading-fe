"use client";
// import Sidebar from "../../components/layout/Sidebar";
// import Topbar from "../../components/layout/Topbar";
import OrdersAnalyticsChart from  "../../components/charts/OrdersAnalyticsChart";
import EarningsPieChart from "../../components/charts/EarningsPieChart";
// import OrdersTable from "../../components/tables/OrdersTable";
// import { Card, CardContent } from "@/components/ui/card";
// import { FaBox, FaUsers, FaUndo } from "react-icons/fa";
// import StatsSection from "../../components/charts/StatsSection";
import StatsGroup from "../../components/charts/StatsGroup";


export default function DashboardHome() {
     

  return (
    <>
      <h1 className="text-2xl font-bold mb-1">Welcome Back, Pendopo</h1>
      <p className="text-gray-400 font-sans mb-3">
        Here is the information about all your orders and products
      </p>
      <div className="mb-4">
        <StatsGroup />
      </div>

      <div className="grid  grid-cols-3 gap-4">
        <div className="col-span-2">
          <OrdersAnalyticsChart />
        </div>
        <div>
          <EarningsPieChart />
        </div>
      </div>
      {/* <OrdersTable /> */}
    </>
  );
}
