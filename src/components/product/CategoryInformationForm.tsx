"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Input from "@/components/product/Input";
import Label from "@/components/product/Label";
import Button from "@/components/product/Button";

export default function CategoryInformationForm() {
  const [cableLength, setCableLength] = useState("");
  const [voltage, setVoltage] = useState("");
  const [transferRate, setTransferRate] = useState("");
  const [displaySize, setDisplaySize] = useState("");

  return (
    <div className="border rounded-md p-4 w-full mt-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown size={18} />
        <h2 className="text-lg font-semibold">Category Information</h2>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 pl-6">
        {/* Cable Length */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Cable Length</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={cableLength}
              onChange={(e) => setCableLength(e.target.value)}
            />

            <Button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
              Count Unit
            </Button>
          </div>
        </div>

        {/* Voltage */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Voltage</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={voltage}
              onChange={(e) => setVoltage(e.target.value)}
            />

            <Button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
              Count Unit
            </Button>
          </div>
        </div>

        {/* Data Transfer Rate */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Data Transfer Rate</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={transferRate}
              onChange={(e) => setTransferRate(e.target.value)}
            />

            <Button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
              Count Unit
            </Button>
          </div>
        </div>

        {/* Display Size */}
        <div className="flex items-center gap-4">
          <Label className="w-58">Display Size</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={displaySize}
              onChange={(e) => setDisplaySize(e.target.value)}
            />

            <Button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
              Count Unit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
