"use client";

import { useState } from "react";

export default function VerifyEmailForm() {
  const [otp, setOtp] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 0) {
      alert("Please enter OTP");
      return;
    }
    //console.log("OTP Submitted:", otp);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow border p-6">
      <h2 className="text-2xl font-semibold mb-2">Verify email address</h2>
      <p className="text-sm text-gray-600 mb-4">
        To verify your email, we{"'"}ve sent a One Time Password (OTP) to{" "}
        <span className="font-medium">wira@inatrading.co.id</span>{" "}
        <a href="#" className="text-indigo-600 underline">
          (Change)
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* OTP Input */}
        <div>
          <label className="block text-sm font-medium">Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
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

      {/* Resend OTP */}
      <div className="mt-4 text-center">
        <a href="#" className="text-indigo-600 text-sm font-medium">
          Resend OTP
        </a>
      </div>
    </div>
  );
}
