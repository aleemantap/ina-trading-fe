"use client";

import { useState } from "react";
import { X, Trash2 } from "lucide-react";

import Button from "@/components/product/Button";
import Label from "@/components/product/Label";

interface WarehouseRow {
  warehouse: string;
  stock: string;
}

export default function PostProductModel2() {
  const [eligible, setEligible] = useState<"yes" | "no" | "">("");
  const [files, setFiles] = useState<File[]>([]);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = [...files, ...Array.from(e.target.files)];
    setFiles(newFiles);
    e.target.value = "";
  };

  const addMore = () => {
    document.getElementById("export-upload")?.click();
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  // Warehouse section
  const [rows, setRows] = useState<WarehouseRow[]>([
    { warehouse: "", stock: "" },
  ]);

  const handleChange = (
    index: number,
    field: keyof WarehouseRow,
    value: string
  ) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  const addRow = () => {
    setRows([...rows, { warehouse: "", stock: "" }]);
  };

  const removeRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

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
        <span className="font-medium">Product Information</span>{" "}
        <span className="text-gray-400">›</span>{" "}
        <span className="text-green-500 font-medium">Export and Warehouse</span>
      </p>

      {/* ================= EXPORT SECTION ================= */}
      <div className="bg-[#D9D9D959] border border-black rounded-md p-4 mt-6">
        <Label required>Eligible to export?</Label>

        <div className="flex items-center gap-6 pl-6 mt-2 mb-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="eligible"
              value="yes"
              checked={eligible === "yes"}
              onChange={() => setEligible("yes")}
            />
            Yes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="eligible"
              value="no"
              checked={eligible === "no"}
              onChange={() => setEligible("no")}
            />
            No
          </label>
        </div>

        {/* Only show upload if eligible */}
        {eligible === "yes" && (
          <div className="pl-6">
            <Label>Upload Export Document</Label>

            <input
              id="export-upload"
              type="file"
              className="hidden"
              multiple
              onChange={handleUpload}
            />

            <Button
              onClick={addMore}
              className="px-4 py-1 border border-gray-400 bg-white text-gray-700"
            >
              Choose File
            </Button>

            {files.length > 0 && (
              <ul className="text-sm text-gray-700 mt-3 space-y-1">
                {files.map((file, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border rounded-md px-2 py-1"
                  >
                    <span className="truncate">📎 {file.name}</span>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeFile(i)}
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <button
              type="button"
              onClick={addMore}
              className="text-blue-600 text-sm mt-2 hover:underline"
            >
              + Add more
            </button>
          </div>
        )}
      </div>

      {/* ================= WAREHOUSE SECTION ================= */}
      <div className="bg-[#D9D9D959] border border-black rounded-md p-6 mt-8">
        {rows.map((row, index) => (
          <div key={index} className="mb-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Warehouse */}
              <div>
                <Label required>Warehouse</Label>
                <select
                  className="border rounded-lg p-2 w-full mt-1 bg-[#808080]"
                  value={row.warehouse}
                  onChange={(e) =>
                    handleChange(index, "warehouse", e.target.value)
                  }
                >
                  <option value="">Select warehouse</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                  <option>Surabaya</option>
                </select>
              </div>

              {/* Stock */}
              <div>
                <Label>Stock</Label>
                <input
                  type="text"
                  className="border rounded-lg p-2 w-full mt-1"
                  value={row.stock}
                  onChange={(e) => handleChange(index, "stock", e.target.value)}
                />
              </div>
            </div>

            {/* Remove Button */}
            {rows.length > 1 && (
              <button
                className="text-red-500 hover:text-red-700 mt-2"
                onClick={() => removeRow(index)}
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        ))}

        <button
          onClick={addRow}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          + Add More
        </button>
      </div>

      {/* ================= ACTION BUTTON ================= */}
      <div className="mt-6">
        <div className="flex items-center gap-6">
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
  );
}
