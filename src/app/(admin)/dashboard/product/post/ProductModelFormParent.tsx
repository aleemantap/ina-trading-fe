"use client";

import { useState } from "react";
import ProductModelForm, { ProductModel } from "./ProductModelForm";

export default function ProductModelFormParent() {
  const [models, setModels] = useState<ProductModel[]>([
    {
      id: 1,
      modelName: "",
      price: "",
      stock: "",
      weight: "",
      weightUnit: "Kg",
      dimension: { length: "", width: "", height: "", unit: "Cm" },
    },
  ]);

  const handleUpdate = (id: number, updated: ProductModel) => {
    setModels((prev) => prev.map((m) => (m.id === id ? updated : m)));
  };

  const addNewModel = () => {
    setModels((prev) => [
      ...prev,
      {
        id: Date.now(),
        modelName: "",
        price: "",
        stock: "",
        weight: "",
        weightUnit: "Kg",
        dimension: { length: "", width: "", height: "", unit: "Cm" },
      },
    ]);
  };

  const handleSubmit = () => {
    console.log("Submitted models:", models);
    // nanti di sini bisa dispatch ke redux
  };

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex items-start justify-between gap-6">
        {/* Left box */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-red-500 w-40 h-40 flex items-center justify-center">
            <div className="border border-dashed border-red-400 w-10 h-10 flex items-center justify-center text-red-500 text-2xl">
              +
            </div>
          </div>
          {/* <p className="text-red-500 text-sm font-medium mt-1">Models</p> */}
          {/* <p className="text-xs text-gray-500 mt-1 text-center">
            NOTES : Please Fill in at Least 1 Product Models
          </p> */}
        </div>

        {/* Form list */}
        <div className="flex-1 flex flex-col gap-6">
          {models.map((model) => (
            <ProductModelForm
              key={model.id}
              value={model}
              onChange={(updated) => handleUpdate(model.id, updated)}
            />
          ))}

          {/* <button
            onClick={addNewModel}
            className="self-start mt-3 px-4 py-2 rounded-lg border border-dashed border-red-500 text-red-500 hover:bg-red-50"
          >
            + Add Another Model
          </button> */}
        </div>

        {/* Right box */}
        <div className="flex flex-col items-center">
          <div className="border-2 border-dashed border-red-500 w-40 h-40 flex items-center justify-center">
            <button
              onClick={addNewModel}
              type="button"
              className="bg-gray-100 hover:bg-gray-200 w-14 h-14 rounded-full flex items-center justify-center text-3xl font-light"
            >
              +
            </button>
          </div>
          {/* <p className="mt-2 font-medium text-sm">
            Product measurement <span className="text-xl">+</span>
          </p> */}
        </div>
      </div>

      {/* <div className="text-right mt-8">
        <button
          onClick={handleSubmit}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700"
        >
          Save Product
        </button>
      </div> */}
    </div>
  );
}
