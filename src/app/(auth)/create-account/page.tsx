"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store";
import { registerUser } from "../../../store/authSlice"; 


export default function CreateAccountForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();

   const { loading, error, user } = useSelector(
     (state: RootState) => state.auth
   );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validasi konfirmasi password
    if (form.password !== form.confirmPassword) {
      setErrors("Password dan konfirmasi password tidak sama!");
      return;
    }

    // ✅ Validasi panjang minimal password
    if (form.password.length < 6) {
      setErrors("Password minimal 6 karakter!");
      return;
    }

     dispatch(
       registerUser({
         name: form.name,
         email: form.email,
         mobile: form.mobile,
         password: form.password,
       })
     );

    // Jika semua validasi lolos
    //console.log("Form submitted:", form);
    alert("Akun berhasil dibuat!");
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

          {/* Name */}
          <div>
            <label className="block text-sm font-medium">Your Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
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

       
          {/* Error Message */}
          {errors && (
            <p className="text-red-600 text-sm font-medium text-center">
              {errors}
            </p>
          )}

          {/* {error && <p className="text-red-500 text-sm text-center">{error}</p>} */}

          {loading && (
            <p className="text-sm text-gray-600 text-center">Loading...</p>
          )}

          {/* Success Message */}
          {user && (
            <p className="text-green-600 text-sm text-center">
              Register berhasil untuk {user.name || "user"} 🎉
            </p>
          )}

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
          <Link
            href="/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign in
          </Link>
        </p>

        {/* <Link
          href="/login"
          className="text-sm text-blue-600 hover:underline"
        >
          Sign in
        </Link> */}

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
