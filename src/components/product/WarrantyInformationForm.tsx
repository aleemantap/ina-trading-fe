"use client";

import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import Input from "@/components/product/Input";
import Label from "@/components/product/Label";

export default function WarrantyInformationForm() {
  const [warrantyType, setWarrantyType] = useState("");
  const [warrantyDuration, setWarrantyDuration] = useState("");
  const [warrantyDate, setWarrantyDate] = useState("");

  return (
    <div className="border rounded-md p-4 w-full mt-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown size={18} />
        <Label className="text-lg font-semibold m-0">
          Warranty Information
        </Label>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 pl-6">
        {/* Warranty Type */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Warranty Type</Label>
          <Input
            className="flex-1"
            value={warrantyType}
            onChange={(e) => setWarrantyType(e.target.value)}
          />
        </div>

        {/* Warranty Duration + Date */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Warranty Duration</Label>

          {/* Duration */}
          <Input
            className="flex-[2]"
            value={warrantyDuration}
            onChange={(e) => setWarrantyDuration(e.target.value)}
            placeholder=""
          />

          {/* Date (with icon) */}
          <div className="relative flex-[1]">
            <Input
              type="date"
              value={warrantyDate}
              onChange={(e) => setWarrantyDate(e.target.value)}
              className="w-full pr-9"
            />
            {/* <Calendar
              size={18}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
