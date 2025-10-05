"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: tambahkan API call untuk reset password
    //console.log("Password baru:", password);
    //console.log("Konfirmasi:", confirm);
  };

  return (
    <div className="flex min-h-2 items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl rounded-lg border bg-white p-8 shadow">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-10" />
        </div>

        {/* Title */}
        <h1 className="mb-6 text-2xl font-semibold">Reset password</h1>

        <form onSubmit={handleSubmit} className="space-y-4 w-3xs">
          {/* New Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded border px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Confirm New Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full rounded border px-3 py-2 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Reset button */}
          <button
            type="submit"
            className="w-full rounded bg-[#474e76] px-4 py-2 text-white hover:bg-indigo-800"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
