"use client";

import { useState } from "react";

export default function PaymentDataForm() {
  const [form, setForm] = useState({
    bankName: "",
    bankAccount: "",
    docType: "NIB",
    docNumber: "",
    datePublished: "",
    validUntil: "",
    file: null,
  });

  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-lg bg-white shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Payment Data</h2>

      {/* Bank Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bank Name
          </label>
          <input
            type="text"
            value={form.bankName}
            onChange={(e) => setForm({ ...form, bankName: e.target.value })}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Bank Account Number
          </label>
          <input
            type="text"
            value={form.bankAccount}
            onChange={(e) => setForm({ ...form, bankAccount: e.target.value })}
            className="mt-1 block w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Business Document */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Business Document
          </label>
          <button
            type="button"
            className="mt-2 flex items-center gap-1 text-indigo-600 font-medium"
          >
            <span className="text-xl">+</span> Add Document
          </button>
        </div>

        {/* Document Fields */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Type
            </label>
            <select
              value={form.docType}
              onChange={(e) => setForm({ ...form, docType: e.target.value })}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm"
            >
              <option value="NIB">NIB</option>
              <option value="SIUP">SIUP</option>
              <option value="NPWP">NPWP</option>
            </select>
          </div>

          {/* Document Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Document Number
            </label>
            <input
              type="text"
              value={form.docNumber}
              onChange={(e) => setForm({ ...form, docNumber: e.target.value })}
              className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          {/* Date Published */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Published
            </label>
            <input
              type="date"
              value={form.datePublished}
              onChange={(e) =>
                setForm({ ...form, datePublished: e.target.value })
              }
              className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          {/* Valid Until */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Valid Until
            </label>
            <input
              type="date"
              value={form.validUntil}
              onChange={(e) => setForm({ ...form, validUntil: e.target.value })}
              className="mt-1 block w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload
            </label>
            <input
              type="file"
              //onChange={(e) =>
                //setForm({ ...form, file: e.target.files?.[0] || null })
              //}
              className="mt-1 block w-full text-sm"
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex justify-between">
        <button className="px-6 py-2 rounded-md bg-indigo-500 text-white font-medium hover:bg-indigo-600">
          Back
        </button>
        <button className="px-6 py-2 rounded-md bg-gray-800 text-white font-medium hover:bg-gray-900">
          Continue
        </button>
      </div>
    </div>
  );
}
