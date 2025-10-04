"use client";

import { useState } from "react";

export default function BusinessDetailsPage() {
  const [form, setForm] = useState({
    businessName: "",
    businessAddress: "",
    country: "Indonesia",
    province: "Jawa Barat",
    city: "Bogor",
    postalCode: "16115",
    businessPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Business details:", form);
    // TODO: API call atau redirect ke halaman berikutnya
  };

  return (
    <div className="mx-auto w-full max-w-6xl rounded-lg border p-8 shadow-sm bg-white">
      <h1 className="mb-2 text-2xl font-semibold">Welcome wira</h1>
      <p className="mb-6 text-gray-600">
        Please complete your business data to begin selling your product in our
        platform.
      </p>
      <div className="grid grid-cols-3 gap-x-4">
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-2"
              />
            </div>

            {/* Business Address */}
            <div>
              <label className="block text-sm font-medium">
                Business Address
              </label>
              <input
                type="text"
                name="businessAddress"
                value={form.businessAddress}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-2"
              />
            </div>

            {/* Country & Province */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Country</label>
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-2"
                >
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Province</label>
                <select
                  name="province"
                  value={form.province}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-2"
                >
                  <option>Jawa Barat</option>
                  <option>Jawa Tengah</option>
                  <option>Jawa Timur</option>
                </select>
              </div>
            </div>

            {/* City & Postal Code */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">City</label>
                <select
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-2"
                >
                  <option>Bogor</option>
                  <option>Jakarta</option>
                  <option>Bandung</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium">Postal Code</label>
                <input
                  type="text"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  className="mt-1 w-full rounded border p-2"
                />
              </div>
            </div>

            {/* Business Phone */}
            <div>
              <label className="block text-sm font-medium">
                Business Phone
              </label>
              <input
                type="text"
                name="businessPhone"
                value={form.businessPhone}
                onChange={handleChange}
                className="mt-1 w-full rounded border p-2"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full rounded bg-[#474e76] py-2 text-white hover:bg-indigo-700"
            >
              Continue
            </button>
          </form>
        </div>
        {/* <div>&nbsp;</div> */}
        {/* <div>&nbsp;</div> */}
      </div>
    </div>
  );
}
