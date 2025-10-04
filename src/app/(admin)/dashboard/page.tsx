"use client";
// import Sidebar from "../../components/layout/Sidebar";
// import Topbar from "../../components/layout/Topbar";
import OrdersAnalyticsChart from  "../../components/charts/OrdersAnalyticsChart";
import EarningsPieChart from "../../components/charts/EarningsPieChart";
import OrdersTable from "../../components/tables/OrdersTable";
import { Card, CardContent } from "@/components/ui/card";
import { FaBox, FaUsers, FaUndo } from "react-icons/fa";
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
      <OrdersTable />
    </>
  );
}

// export default function DashboardPage() {
//   return (
   

//         <main className="flex-1 overflow-y-auto p-6 space-y-6">
//           <h2 className="text-2xl font-bold">Welcome Back, Pendopo</h2>
//           <p className="text-gray-500">
//             Here is the information about all your orders and products
//           </p>

       
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-white rounded-lg shadow p-4">
//               <p className="text-sm text-gray-500">Total products</p>
//               <h3 className="text-2xl font-bold">100</h3>
//             </div>
//             <div className="bg-white rounded-lg shadow p-4">
//               <p className="text-sm text-gray-500">Total buyers</p>
//               <h3 className="text-2xl font-bold">10,827</h3>
//             </div>
//             <div className="bg-white rounded-lg shadow p-4">
//               <p className="text-sm text-gray-500">Refunded</p>
//               <h3 className="text-2xl font-bold">957</h3>
//             </div>
//           </div>

        
//           <div className="grid grid-cols-3 gap-4">
//             <div className="bg-white rounded-lg shadow p-4 col-span-2 h-72">
//               <h3 className="text-lg font-semibold mb-2">Orders Analytics</h3>
//               <OrdersAnalyticsChart />
//             </div>
//             <div className="bg-white rounded-lg shadow p-4 h-72">
//               <h3 className="text-lg font-semibold mb-2">Earnings</h3>
//               <EarningsPieChart />
//             </div>
//           </div>

//         </main>
    
//   );
// }
