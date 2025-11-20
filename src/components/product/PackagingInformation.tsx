"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Input from "@/components/product/Input";
import Label from "@/components/product/Label";
import Button from "@/components/product/Button";

export default function PackagingInformationForm() {
  const [packageWeight, setPackageWeight] = useState("");
  const [packageDimension, setPackageDimension] = useState("");

  return (
    <div className="border rounded-md p-4 w-full mt-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronDown size={18} />
        <h2 className="text-lg font-semibold">Category Information</h2>
      </div>

      {/* Form */}
      <div className="flex flex-col gap-4 pl-6">
        {/* Package Weight */}
        <div className="flex items-center gap-4">
          <Label className="w-56">Package Weight</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={packageWeight}
              onChange={(e) => setPackageWeight(e.target.value)}
              placeholder="e.g. 2.5"
            />

            <Button className="px-3 py-2 rounded-md border border-gray-300 bg-white text-gray-700">
              Count Unit
            </Button>
          </div>
        </div>

        {/* Package Dimension */}
        <div className="flex items-center gap-4">
          <Label className="w-56">Package Dimension</Label>

          <div className="flex items-center gap-2 flex-1">
            <Input
              className="flex-1"
              value={packageDimension}
              onChange={(e) => setPackageDimension(e.target.value)}
              placeholder="Length x Width x Height"
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
