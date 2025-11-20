"use client";

import Label from "./Label";
import Input from "./Input";
import { ChevronDown } from "lucide-react";

interface Props {
  brand: string;
  setBrand: (v: string) => void;
  manufacturer: string;
  setManufacturer: (v: string) => void;
  color: string;
  setColor: (v: string) => void;
  material: string;
  setMaterial: (v: string) => void;
}

export default function GeneralInformationSection({
  brand,
  setBrand,
  manufacturer,
  setManufacturer,
  color,
  setColor,
  material,
  setMaterial,
}: Props) {
  return (
    <div className="border rounded-md p-5 mb-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <ChevronDown size={18} className="text-gray-500" />
        <h2 className="text-lg font-semibold">General Information</h2>
      </div>

      {/* Form fields */}
      <div className="space-y-4 pl-6">
        <div className="flex items-center gap-4">
          <div className="w-78">
            <Label>Brand</Label>
          </div>
          <Input value={brand} onChange={(e) => setBrand(e.target.value)} />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-78">
            <Label>Manufacturer</Label>
          </div>
          <Input
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-78">
            <Label>Color</Label>
          </div>
          <Input value={color} onChange={(e) => setColor(e.target.value)} />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-78">
            <Label>Material</Label>
          </div>
          <Input
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
