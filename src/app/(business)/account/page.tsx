"use client";
import { useState } from "react";

export default function AccountCreationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Step 1 - Account:", email, password);
  };

  return (
    <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow">
      <h1 className="mb-6 text-2xl font-semibold">Sign in</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium">
            Email or mobile
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border px-3 py-2 text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-[#474e76] px-4 py-2 text-white hover:bg-indigo-800"
        >
          Continue
        </button>
      </form>

      <p className="mt-6 text-xs text-gray-600">
        By creating an account or logging in, you agree to {"Inatrading's"}{" "}
        <a href="#" className="text-indigo-600 underline">
          Terms & Conditions
        </a>
        ,{" "}
        <a href="#" className="text-indigo-600 underline">
          Privacy Policy
        </a>
        . You confirm you are creating this business account on behalf of your
        organization and have authority to bind your organization.
      </p>
    </div>
  );
}
