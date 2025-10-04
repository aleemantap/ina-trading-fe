"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function CreateAccountForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className="mb-0">
        <img src="/logo.png" alt="Logo" className="h-22" />
      </div>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow border p-6">
        <h2 className="text-2xl font-semibold mb-4">Create Account</h2>

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
            <label className="block text-sm font-medium">
              Password (at least 6 characters)
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full mt-1 border rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring focus:ring-indigo-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#474e76] text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
          >
            Verify email address
          </button>
        </form>

        {/* Already have account */}
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
            Sign in
          </a>
        </p>

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
          .
        </p>
      </div>
    </>
  );
}
