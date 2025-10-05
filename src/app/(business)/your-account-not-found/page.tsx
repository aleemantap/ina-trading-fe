"use client";

import { useState } from "react";

export default function AccountNotFoundPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log("Kirim reset password ke:", email);
  };

  return (
    <>
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
        <h1 className="mb-1 text-2xl font-semibold">Your Account Not Found</h1>
        <p className="text-sm text-gray-600">
          wira@inatrading.co.id{" "}
          <a href="#" className="text-blue-400 underline">
            Change?
          </a>
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
            Create Account
          </button>
          <p className="text-sm text-gray-900 font-bold">
            Already a business Customer ?
          </p>
          <div className="text-sm text-blue-500">
            <a href="#" className="text-blue-400 underline">
              Sign In with another email or mobile ?
            </a>
          </div>
        </form>
        {/* Divider */}
        <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <p className="text-sm text-gray-600 mt-2">
          By creating an account or logging in, you agree to Inatrading{"'"}s
        </p>
        <div className="text-sm text-gray-600">
          <a href="#" className="text-blue-500 underline">
            Terms & Conditions Privacy Policy
          </a>
          , and the You agree that you are creating this business account on
          behalf your organization and have authority to bind your organization.{" "}
        </div>
      </div>
    </>
  );
}
