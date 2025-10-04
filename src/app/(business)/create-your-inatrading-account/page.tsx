"use client";

import { useState } from "react";

export default function InatradingRegisterForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Form submitted", form);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow border p-6">
      <h2 className="text-2xl font-semibold mb-2">
        Enter your name and choose your business password
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">Your name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium">Mobile numbers</label>
          <input
            type="text"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
          <p className="text-xs text-gray-500 mt-1">
            Passwords must be at least 6 characters.
          </p>
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full mt-1 border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-indigo-200"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#474e76] text-white font-semibold py-2 rounded-md hover:bg-indigo-800"
        >
          Create your Inatrading account
        </button>
      </form>

      {/* Terms */}
      <p className="text-xs text-gray-600 mt-4">
        By creating an account or logging in, you agree to Inatrading’s{" "}
        <a href="#" className="text-indigo-600 underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-indigo-600 underline">
          Privacy Policy
        </a>
        . You agree that you are creating this business account on behalf of
        your organization and have authority to bind your organization.
      </p>
    </div>
  );
}
