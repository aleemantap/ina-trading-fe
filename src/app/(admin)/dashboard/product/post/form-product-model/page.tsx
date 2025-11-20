"use client";
import { useState } from "react";
import Button from "@/components/product/Button";
import { ChevronDown } from "lucide-react";
import SingleImageUpload from "@/components/product/SingleImageUpload"; // opsional jika mau pakai

export default function DetailFormPage() {
  
    const [preOrder, setPreOrder] = useState("no");
    const [keywords, setKeywords] = useState([""]);
    const [features, setFeatures] = useState([""]);

    const [promotionEnabled, setPromotionEnabled] = useState(false);
    const [images, setImages] = useState<File[]>([]);
    const [image, setImage] = useState<File | null>(null);
  
    const setFeatureValue = (value: string, index: number) => {
      const updated = [...features];
      updated[index] = value;
      setFeatures(updated);
    };
  return (
    <div className="p-6 ml-5">
      <h1 className="text-2xl mb-1">Input Your Product Model</h1>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        Post Product <span className="text-gray-400">›</span>{" "}
        <span className="text-green-500 font-medium">input product detail</span>{" "}
        <span className="text-gray-400">›</span>{" "}
        <span className="text-green-500 font-medium">Product Model</span>{" "}
      </p>
      <div className="space-y-3">
        {/* Product Order */}
        <div className="w-2/3 max-w-3xl">
          <label className="font-medium block mb-2">
            <span className="text-red-600">*</span> Product has measurement?
          </label>
          <div className="flex gap-4 mb-3 pl-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={preOrder === "yes"}
                onChange={() => setPreOrder("yes")}
              />
              Yes
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                checked={preOrder === "no"}
                onChange={() => setPreOrder("no")}
              />
              No
            </label>
          </div>
        </div>
        <div className="w-2/3 max-w-3xl">
          <label className="font-medium flex items-center gap-1 mb-2">
            <ChevronDown size={18} className="text-gray-600" />
            Modal mandatory info
          </label>
          <div className="flex gap-4 mb-3 p-4 border-1 ml-3">
            <div className="w-full max-w-5xl mx-auto">
              <div className="flex gap-6">
                {/* LEFT COLUMN (60%) */}
                <div className="w-[60%] space-y-4">
                  {/* model name */}
                  <div>
                    <label className="font-medium block mb-1">Model Name</label>
                    <input className="w-full border rounded-md px-4 py-2" />
                  </div>

                  {/* sku */}
                  <div>
                    <label className="font-medium block mb-1">SKU</label>
                    <input className="w-full border rounded-md px-4 py-2" />
                  </div>

                  {/* weight */}
                  <div>
                    <label className="font-medium block mb-1">
                      Weight (kg)
                    </label>
                    <input
                      className="w-full border rounded-md px-4 py-2"
                      type="number"
                    />
                  </div>

                  {/* dimension */}
                  <div>
                    <label className="font-medium block mb-1">
                      Dimension (P x L x T)
                    </label>
                    <input
                      placeholder="Contoh: 20x10x5"
                      className="w-full border rounded-md px-4 py-2"
                    />
                  </div>

                  {/* stock */}
                  <div>
                    <label className="font-medium block mb-1">Stock</label>
                    <input
                      className="w-full border rounded-md px-4 py-2"
                      type="number"
                    />
                  </div>

                  {/* price */}
                  <div>
                    <label className="font-medium block mb-1">Price</label>
                    <input
                      className="w-full border rounded-md px-4 py-2"
                      type="number"
                    />
                  </div>

                  {/* radio promo */}
                  <div className="mt-2">
                    <label className="font-medium block mb-1">
                      Configure Promotion Price?
                    </label>

                    <div className="flex gap-6">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={promotionEnabled}
                          onChange={() => setPromotionEnabled(true)}
                        />
                        Yes
                      </label>

                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          checked={!promotionEnabled}
                          onChange={() => setPromotionEnabled(false)}
                        />
                        No
                      </label>
                    </div>
                  </div>

                  {/* PROMO FIELDS */}
                  {promotionEnabled && (
                    <div className="mt-3 space-y-4 border rounded-md p-4 bg-gray-50">
                      <div>
                        <label className="font-medium block mb-1">
                          Sale Price
                        </label>
                        <input
                          className="w-full border rounded-md px-4 py-2"
                          type="number"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-medium block mb-1">
                            Start Date
                          </label>
                          <input
                            className="w-full border rounded-md px-4 py-2"
                            type="date"
                          />
                        </div>
                        <div>
                          <label className="font-medium block mb-1">
                            End Date
                          </label>
                          <input
                            className="w-full border rounded-md px-4 py-2"
                            type="date"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* RIGHT COLUMN (40%) */}
                <div className="w-[40%]">
                  {/* Thumbnail upload placeholder (pakai komponen upload kamu) */}
                  <div className="w-full h-[300px] rounded-md border flex items-center justify-center bg-gray-100 text-gray-400">
                    <SingleImageUpload
                      image={image}
                      setImage={setImage}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ACTION BUTTONS */}
          <div className="flex gap-3 mt-2">
            <Button
              // onClick={addFeature}
              className="bg-[#BFCAD3] text-white "
            >
              Add more +
            </Button>
            <Button
              // onClick={removeFeature}
              className="bg-[#C54D40] text-white"
            >
              Remove Last -
            </Button>
          </div>
        </div>
        <div className="w-2/3 max-w-3xl">
          <div className="flex items-center justify-start gap-6 mt-6">
            <Button className="px-6 py-2 rounded-md text-white font-semibold bg-[#7A8BB1] hover:opacity-90">
              Cancel
            </Button>

            <Button className="px-6 py-2 rounded-md text-white font-semibold bg-[#67B5AC] hover:opacity-90">
              Next
            </Button>

            <Button className="px-6 py-2 rounded-md text-white font-semibold bg-[#DCC57C] hover:opacity-90">
              Save to Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
