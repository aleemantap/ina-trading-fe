import StatsCard from "./StatsCard";
import { FaBox, FaCheckCircle, FaUndo } from "react-icons/fa";

export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsCard
        icon={<FaBox className="w-6 h-6" />}
        value="100"
        label="Total products"
        change="+0.49% this week"
        changeType="up"
      />

      <StatsCard
        icon={<FaCheckCircle className="w-6 h-6" />}
        value="10,827"
        label="Total buyers"
        change="-0.91% this week"
        changeType="down"
      />

      <StatsCard
        icon={<FaUndo className="w-6 h-6" />}
        value="957"
        label="Refunded"
        change="+1.51% this week"
        changeType="up"
      />
    </div>
  );
}
