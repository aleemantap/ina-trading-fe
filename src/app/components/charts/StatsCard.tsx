import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  change: string;
  changeType?: "up" | "down";
}

export default function StatsCard({
  icon,
  value,
  label,
  change,
  changeType = "up",
}: StatsCardProps) {
  return (
    <div className="flex items-center gap-4 border border-gray-200 rounded-lg p-5 bg-white shadow-sm">
      {/* Icon */}
      <div className="p-3 rounded-lg bg-gray-50 shadow-sm text-blue-600">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-gray-500">{label}</span>

        {/* Change indicator */}
        <span
          className={`flex items-center gap-1 text-sm mt-1 ${
            changeType === "up" ? "text-green-600" : "text-red-600"
          }`}
        >
          {changeType === "up" ? "▲" : "▼"} {change}
        </span>
      </div>
    </div>
  );
}
