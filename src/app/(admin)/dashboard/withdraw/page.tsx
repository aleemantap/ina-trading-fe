"use client";

import { useState } from "react";

import ViewMoreMenu from "@/components/withdraw/ViewMoreMenu";
import BalanceChart from "@/components/withdraw/BalanceChart";
import BalanceInfoCard from "@/components/withdraw/BalanceInfoCard";
import RecentWithdraws from "@/components/withdraw/RecentWithdraws";
import UpcammingWithdraws from "@/components/withdraw/UpcammingWithdraws";
import PendingWithdraws from "@/components/withdraw/PendingWithdraws";
import RequestForWithdrawModal from "@/components/withdraw/RequestForWithdrawModal";

export default function WithdrawPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="w-full">
        <div className="flex justify-end p-4">
          <ViewMoreMenu />
        </div>

        {/* GRID BALANCE + CHART */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 h-[400px]">
          {/* LEFT */}
          <div className="h-full">
            <BalanceInfoCard onWithdraw={() => setModalOpen(true)} />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2 h-full">
            <BalanceChart />
          </div>
        </div>

        {/* RECENT WITHDRAWS SECTION */}
        <div className="px-4">
          <RecentWithdraws />
        </div>

        {/* RECENT Upcamming */}
        <div className="px-4">
          <UpcammingWithdraws />
        </div>

        {/* RECENT Upcamming */}
        <div className="px-4">
          <PendingWithdraws />
        </div>
      </div>
      {/* MODAL */}
      <RequestForWithdrawModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
