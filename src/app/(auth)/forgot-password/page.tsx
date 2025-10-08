"use client";

// import { useState } from "react";
import Image from "next/image";
import logo from "../../../../public/logo.png";

export default function ForgotPasswordPage() {
  // const [email, setEmail] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   //console.log("Kirim reset password ke:", email);
  // };

  return (
    <>
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <div className="mb-6 flex justify-center">
          {/* <img src="/logo.png" alt="Logo" className="h-15" /> */}
          <Image className="h-22 w-54" src={logo} alt="logo" />;
        </div>
        <h1 className="mb-6 text-2xl font-semibold">Forgot password</h1>
        <form className="space-y-4">
          {/* Email/Phone */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Email or mobile phone number
            </label>
            <input
              type="text"
              placeholder="Enter your email or phone"
              className="w-full rounded border px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <p className="text-sm text-gray-600">Send email reset link.</p>

          {/* Send button */}
          <button
            type="submit"
            className="w-full rounded bg-[#474e76]  px-4 py-2 text-white hover:bg-indigo-800"
          >
            Send
          </button>
        </form>
        {/* Divider */}
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </>
  );
}
