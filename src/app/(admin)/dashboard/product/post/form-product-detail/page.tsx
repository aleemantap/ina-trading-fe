"use client";
import { useState } from "react";
import Button  from "@/components/product/Button";
import Input from "@/components/product/Input";
import Label from "@/components/product/Label";
import { Info } from "lucide-react";
import MultiImageUpload from "@/components/product/MultiImageUpload";




export default function DetailFormPage() {
  const [productName, setProductName] = useState("");
  const [preOrder, setPreOrder] = useState("no");
  const [days, setDays] = useState("");
  const [isBrandNew, setIsBrandNew] = useState("no");
  const [keywords, setKeywords] = useState([""]);
  const [productDesc, setProductDesc] = useState("");
  const [features, setFeatures] = useState([""]);
  const [images, setImages] = useState<File[]>([]);

  const addKeyword = () => setKeywords([...keywords, ""]);
  const removeKeyword = () => {
    if (keywords.length > 1) setKeywords(keywords.slice(0, -1));
  };

  const setKeywordValue = (value: string, index: number) => {
    const updated = [...keywords];
    updated[index] = value;
    setKeywords(updated);
  };

  const addFeature = () => setFeatures([...features, ""]);
  const removeFeature = () => {
    if (features.length > 1) setFeatures(features.slice(0, -1));
  };

  const setFeatureValue = (value: string, index: number) => {
    const updated = [...features];
    updated[index] = value;
    setFeatures(updated);
  };
  return (
    <div className="p-7">
      <h1 className="text-2xl mb-1">Input Your Product Detail</h1>
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-8">
        Post Product <span className="text-gray-400">›</span>{" "}
        <span className="text-green-500 font-medium">input product detail</span>{" "}
        <span className="text-gray-400">›</span>{" "}
      </p>
      <div className="space-y-3">
        {/* Product Name */}
        <div className="w-2/3 max-w-3xl">
          <Label required info={<Info size={14} />}>
            Product key Word
          </Label>
          <div className="relative">
            <Input
              maxLength={150}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
              {productName.length}/150
            </span>
          </div>
        </div>
        {/* Product Order */}
        <div className="w-2/3 max-w-3xl">
          <Label required info="">
            Product Pre order ?
          </Label>
          <div className="flex gap-6 mb-3 ml-2">
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
          <div className="flex gap-2 items-center mb-4 ml-2">
            <input
              type="number"
              disabled={preOrder === "no"}
              className={`border rounded-md px-3 py-1 w-24 ${
                preOrder === "no" ? "bg-gray-100" : ""
              }`}
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <span className="px-3 py-1 border rounded-md bg-gray-100 text-gray-500">
              Days
            </span>
          </div>
          {/* Product Brand New */}
          <div className="mt-4">
            <Label required>Product brand new?</Label>
            <div className="flex gap-6 ml-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={isBrandNew === "yes"}
                  onChange={() => setIsBrandNew("yes")}
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={isBrandNew === "no"}
                  onChange={() => setIsBrandNew("no")}
                />
                No, Used Product
              </label>
            </div>
          </div>
        </div>
        {/* Keywords */}
        <div className="w-2/3 max-w-3xl">
          <div className="mt-6">
            <Label required info={<Info size={14} />}>
              Product key word
            </Label>
            <div className="relative">
              {keywords.map((kw, index) => (
                <div key={index}>
                  <Input
                    maxLength={30}
                    value={kw}
                    onChange={(e) => setKeywordValue(e.target.value, index)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                    {kw.length}/30
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-2">
              <Button onClick={addKeyword} className="bg-[#BFCAD3] text-white ">
                Add more +
              </Button>
              <Button
                onClick={removeKeyword}
                className="bg-[#C54D40] text-white"
              >
                Remove Last -
              </Button>
            </div>
          </div>
        </div>
        {/* Product Description */}
        <div className="w-2/3 max-w-3xl">
          <div className="mt-6">
            <Label required>Product Description</Label>
            <div className="relative">
              <textarea
                maxLength={3000}
                rows={6}
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                className="w-full border rounded-md px-4 py-3 pr-16"
              />

              <span className="absolute bottom-2 right-3 text-xs text-gray-400 pointer-events-none">
                {productDesc.length}/3000
              </span>
            </div>
          </div>
        </div>
        {/* Product Feature */}
        <div className="w-2/3 max-w-3xl">
          <div className="mt-6">
            <Label required>Product feature</Label>
            {features.map((ft, index) => (
              <div className="relative mb-2" key={index}>
                <input
                  value={ft}
                  maxLength={100}
                  onChange={(e) => setFeatureValue(e.target.value, index)}
                  className="w-full border rounded-md px-4 py-1 pr-14"
                />{" "}
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">
                  {ft.length}/100
                </span>
              </div>
            ))}

            <div className="flex gap-3 mt-2">
              <Button onClick={addFeature} className="bg-[#BFCAD3] text-white ">
                Add more +
              </Button>
              <Button
                onClick={removeFeature}
                className="bg-[#C54D40] text-white"
              >
                Remove Last -
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <MultiImageUpload images={images} setImages={setImages} />
        </div>
      </div>
      <div className="w-2/3 max-w-3xl mt-29">
        <div className="mt-6">
          <div className="flex items-center justify-start gap-6">
            <Button
              onClick={() => {}}
              className="px-6 py-2 rounded-md text-white font-semibold bg-[#7A8BB1] hover:opacity-90 "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {}}
              className="px-6 py-2 rounded-md text-white font-semibold bg-[#67B5AC] hover:opacity-90"
            >
              Next
            </Button>
            <Button
              onClick={() => {}}
              className="px-6 py-2 rounded-md text-white font-semibold bg-[#DCC57C] hover:opacity-90"
            >
              Save to Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
