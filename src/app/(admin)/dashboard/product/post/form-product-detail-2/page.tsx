"use client";
import { useState } from "react";
import GeneralInformationSection from "@/components/product/GeneralInformationSection"
import CategoryInformationForm from "@/components/product/CategoryInformationForm";
import ComplianceInformationForm from "@/components/product/ComplianceInformationForm";
import WarrantyInformationForm from "@/components/product/WarrantyInformationForm";
import PackagingInformation from "@/components/product/PackagingInformation";
import Button from "@/components/product/Button";

export default function PostProductDetail2() {
 
    const [brand, setBrand] = useState("");
    const [manufacturer, setManufacturer] = useState("");
    const [color, setColor] = useState("");
    const [material, setMaterial] = useState("");

    return (
      <div className="p-6">
        <h1 className="text-3xl font-semibold mb-10 w-full max-w-3xl">
          Input Your Product Detail
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Post Product <span className="text-gray-400">›</span>{" "}
          <span className="font-medium">input product detail</span>{" "}
          <span className="text-gray-400">›</span>{" "}
          <span className="font-medium">Product Model</span>{" "}
          <span className="text-gray-400">›</span>{" "}
          <span className="text-green-500 font-medium">
            Product Information
          </span>{" "}
        </p>
        <GeneralInformationSection
          brand={brand}
          setBrand={setBrand}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          color={color}
          setColor={setColor}
          material={material}
          setMaterial={setMaterial}
        />
        <CategoryInformationForm />
        <ComplianceInformationForm />
        <WarrantyInformationForm />
        <PackagingInformation />
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
    );
}
