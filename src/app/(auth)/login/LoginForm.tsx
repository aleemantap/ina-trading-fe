"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";

import { login } from "../../../store/reducers/authSlice"; //"@/features/auth/authSlice";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// import type { RootState, AppDispatch } from "@/store/store";
// import { login } from "@/store/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch<AppDispatch>();
  //   const { loading, error } = useSelector((state: RootState) => state.auth);
  const { loading, error, user } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ username, password }));
  };

  useEffect(() => {
    console.log("user",user)
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  return (
    <>
      {/* Card */}
      {/* <div className="w-full max-w-md rounded-lg border bg-white p-8  border-zinc-200"> */}
      {/* <h1 className="mb-6 text-2xl font-semibold">Sign in</h1> */}
      <form className="space-y-4" onSubmit={handleLogin}>
        {/* Email/Phone */}
        <div>
          <label className="mb-1 block text-sm font-medium">
            Email or mobile phone number
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded border border-zinc-200  bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-zinc-200  bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Sign in button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-[#474e76]  px-4 py-2 text-white hover:bg-indigo-800"
        >
          {loading ? "Logging in..." : "Sign in"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>

      {/* Agreement */}
      <p className="mt-4 text-xs text-gray-600">
        By continuing, you agree to Inatrading’s{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms & Conditions
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        .
      </p>

      {/* Links */}
      <div className="mt-3 flex justify-between text-sm text-blue-600">
        <a href="#" className="hover:underline">
          Help?
        </a>
        <Link
          href="/create-account"
          className="text-sm text-blue-600 hover:underline"
        >
          Register
        </Link>
        <Link
          href="/forgot-password"
          className="text-sm text-blue-600 hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      {/* Divider */}
      <div className="my-4 border-t"></div>
      <div className="text-center mb-2">or sigin in using</div>
      {/* INA PAS button */}
      <button className="w-full rounded bg-red-600 px-4 py-2 text-white hover:bg-red-500">
        INA PAS
      </button>

      {/* Create account */}
      <div className="mt-6 text-left text-sm">
        <p className="text-gray-700">Selling your product? </p>
        <p>
          {/* <a href="#" className="text-blue-600 hover:underline">
              Create free business account
            </a> */}
          <Link href="/account" className="text-indigo-600 hover:underline">
            Create free business account
          </Link>
        </p>
      </div>
      {/* </div> */}
    </>
  );
}
