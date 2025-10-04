"use client";

import { useState } from "react";

export default function AccountNotFoundPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Kirim reset password ke:", email);
  };

  return (
    <>
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <div className="mb-6 flex justify-center">
          <img src="/logo.png" alt="Logo" className="h-15" />
        </div>
        <h1 className="mb-1 text-2xl font-semibold">Your Account Not Found</h1>
        <p className="text-sm text-gray-600">
          wira@inatrading.co.id <a href="#">Change?</a>
        </p>
        <form className="space-y-4">
          <p className="text-sm text-gray-600 mt-2">
            Do you Want to Continue create account using this Email?
          </p>

          {/* Send button */}
          <button
            type="submit"
            className="w-full rounded bg-[#474e76]  px-4 py-2 text-white hover:bg-indigo-800"
          >
            Send
          </button>
          <p className="text-sm text-gray-900 font-bold">
            Already a Customer ?
          </p>
          <p className="text-sm text-blue-500 underline">
            Sign In with another email or mobile ?
          </p>
        </form>
        {/* Divider */}
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>
    </>
  );
}
