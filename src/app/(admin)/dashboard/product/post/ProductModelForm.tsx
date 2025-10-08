"use client";

import { useState } from "react";

interface Dimension {
  length: string;
  width: string;
  height: string;
  unit: string;
}

export interface ProductModel {
  id: number;
  modelName: string;
  price: string;
  stock: string;
  weight: string;
  weightUnit: string;
  dimension: Dimension;
}

interface ProductModelFormProps {
  value: ProductModel;
  onChange: (updated: ProductModel) => void;
}

export default function ProductModelForm({
  value,
  onChange,
}: ProductModelFormProps) {
  const handleChange = (field: keyof ProductModel, val: string) => {
    onChange({ ...value, [field]: val });
  };

  const handleDimensionChange = (field: keyof Dimension, val: string) => {
    onChange({
      ...value,
      dimension: { ...value.dimension, [field]: val },
    });
  };

  return (
    <div className="grid grid-cols-[140px_1fr] gap-y-2 items-center w-full max-w-xl">
      {/* Model Name */}
      <label className="font-medium">Models Name</label>
      <input
        type="text"
        placeholder="free text"
        className="border rounded-full px-3 py-1 text-sm w-full"
        value={value.modelName}
        onChange={(e) => handleChange("modelName", e.target.value)}
      />

      {/* Price */}
      <label className="font-medium">Price</label>
      <div className="flex items-center">
        <span className="mr-1 text-gray-500">$</span>
        <input
          type="number"
          placeholder="00.00"
          className="border rounded-full px-3 py-1 text-sm w-full"
          value={value.price}
          onChange={(e) => handleChange("price", e.target.value)}
        />
      </div>

      {/* Stock */}
      <label className="font-medium">Stock</label>
      <input
        type="number"
        placeholder="00.00"
        className="border rounded-full px-3 py-1 text-sm w-full"
        value={value.stock}
        onChange={(e) => handleChange("stock", e.target.value)}
      />

      {/* Weight */}
      <label className="font-medium">Weight</label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="00.00"
          className="border rounded-full px-3 py-1 text-sm flex-1"
          value={value.weight}
          onChange={(e) => handleChange("weight", e.target.value)}
        />
        <select
          value={value.weightUnit}
          onChange={(e) => handleChange("weightUnit", e.target.value)}
          className="border rounded-full px-2 py-1 text-sm"
        >
          <option value="Kg">Kg</option>
          <option value="Gram">Gram</option>
          <option value="Lb">Lb</option>
        </select>
      </div>

      {/* Dimension */}
      <label className="font-medium">Dimension</label>
      <div className="flex items-center gap-1">
        <input
          type="number"
          placeholder="L"
          className="border rounded-full px-2 py-1 text-sm w-14"
          value={value.dimension.length}
          onChange={(e) => handleDimensionChange("length", e.target.value)}
        />
        <span>x</span>
        <input
          type="number"
          placeholder="W"
          className="border rounded-full px-2 py-1 text-sm w-14"
          value={value.dimension.width}
          onChange={(e) => handleDimensionChange("width", e.target.value)}
        />
        <span>x</span>
        <input
          type="number"
          placeholder="H"
          className="border rounded-full px-2 py-1 text-sm w-14"
          value={value.dimension.height}
          onChange={(e) => handleDimensionChange("height", e.target.value)}
        />
        <select
          value={value.dimension.unit}
          onChange={(e) => handleDimensionChange("unit", e.target.value)}
          className="border rounded-full px-2 py-1 text-sm"
        >
          <option value="Cm">Cm</option>
          <option value="Mm">Mm</option>
          <option value="Inch">Inch</option>
        </select>
      </div>
    </div>
  );
}
