import { FaBox, FaCheckCircle, FaUndo } from "react-icons/fa";

export default function StatsGroup() {
  const stats = [
    {
      icon: <FaBox className="w-6 h-6" />,
      value: "100",
      label: "Total products",
      trend: "▲ 3.1 +0.49% this week",
      trendColor: "text-green-600",
    },
    {
      icon: <FaCheckCircle className="w-6 h-6" />,
      value: "10,827",
      label: "Total buyers",
      trend: "▼ 2.56 -0.91% this week",
      trendColor: "text-red-600",
    },
    {
      icon: <FaUndo className="w-6 h-6" />,
      value: "957",
      label: "Refunded",
      trend: "▲ 7.2 +1.51% this week",
      trendColor: "text-green-600",
    },
    
  ];
 return (
   <div className="flex w-[80%] border border-gray-200 rounded-lg bg-white overflow-hidden p-4">
     {stats.map((item, idx) => (
       <div
         key={idx}
         className={`flex-1 relative p-5 ${
           idx !== 0 ? "border-l border-gray-200" : "border-l border-gray-200"
         }`}
       >
         {/* icon kanan atas */}
         <div className="absolute top-4 right-4 p-2 rounded-lg bg-gray-50">
           {item.icon}
         </div>

         {/* konten utama */}
         <p className="text-2xl font-bold text-gray-900">{item.value}</p>
         <p className="text-gray-500 text-sm">{item.label}</p>
         <p className={`${item.trendColor} text-sm mt-1`}>{item.trend}</p>
       </div>
     ))}
   </div>
 );
//   return (
//     <div className="flex border border-gray-200 rounded-lg bg-white overflow-hidden p-4">
//       {stats.map((item, idx) => (
//         <div
//           key={idx}
//           className={`flex-1 flex items-center gap-4 p-5 ${
//             idx !== 0 ? "border-l border-gray-200" : "border-l border-gray-200"
//           }`}
//         >
//           <div className="p-3 rounded-lg bg-gray-50 text-blue-600">
//             {item.icon}
//           </div>
//           <div>
//             <p className="text-2xl font-bold text-gray-900">{item.value}</p>
//             <p className="text-gray-500 text-sm">{item.label}</p>
//             <p className={`${item.trendColor} text-sm`}>{item.trend}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
}
