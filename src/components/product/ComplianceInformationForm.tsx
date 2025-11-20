"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Label from "@/components/product/Label";
import Input from "@/components/product/Input";

export default function ComplianceInformationForm() {
  const [safetyWarning, setSafetyWarning] = useState("");
  const [origin, setOrigin] = useState("");
  const [dangerousGoods, setDangerousGoods] = useState<"yes" | "na" | "">("");

  return (
    <div className="border rounded-md p-4 w-full mt-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown size={18} />
        <Label className="text-lg font-semibold m-0">
          Compliance Information
        </Label>
      </div>

      <div className="flex flex-col gap-4 pl-6">
        {/* Safety Warning */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Safety Warning</Label>
          <Input
            className="flex-1"
            value={safetyWarning}
            onChange={(e) => setSafetyWarning(e.target.value)}
          />
        </div>

        {/* Country/Region of Origin */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Country/Region of Origin</Label>
          <Input
            className="flex-1"
            value={origin}
            onChange={(e) => setOrigin(e.target.value)}
          />
        </div>

        {/* Dangerous Goods */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-4">
            <Label className="w-58">Dangerous Good Regulation?</Label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={dangerousGoods === "yes"}
                  onChange={() => setDangerousGoods("yes")}
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={dangerousGoods === "na"}
                  onChange={() => setDangerousGoods("na")}
                />
                <span>Not Available</span>
              </label>
            </div>
          </div>

          {/* red warning note */}
          <p className="text-red-500 text-sm pl-48 ml-14">
            Upload your product regulation document
          </p>
        </div>
      </div>
    </div>
  );
}
