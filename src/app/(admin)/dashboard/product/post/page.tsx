"use client";
import { useState } from "react";

export default function PostProduct() {
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  const mainCategories = ["Electronics", "Furniture", "Clothing"];
  const subCategories = ["Phone", "Laptop", "Table", "Shoes"];


  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-10 w-full max-w-3xl">
        Hello, Wira Basalamah
      </h1>
      <div className="w-full max-w-3xl space-y-6">
        {/* Main Category */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="w-40 text-gray-700 font-medium">
            Main Category
          </label>
          <select
            value={mainCategory}
            onChange={(e) => setMainCategory(e.target.value)}
            className="border rounded-md px-4 py-3 w-full text-gray-600"
          >
            <option value="">List of Main category</option>
            {mainCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Sub Category */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="w-40 text-gray-700 font-medium">
            Sub categories
          </label>
          <select
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            className="border rounded-md px-4 py-3 w-full text-gray-600"
          >
            <option value="">Sub category</option>
            {subCategories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <label className="w-40 text-gray-700 font-medium"></label>
          <div className="py-1 w-full">
            <div className="flex justify-between">
              <button className="px-10 py-3 bg-indigo-50 text-indigo-600 rounded-md font-medium">
                Back
              </button>
              <button className="px-10 py-3 bg-indigo-50 text-indigo-600 rounded-md font-medium">
                Next
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
