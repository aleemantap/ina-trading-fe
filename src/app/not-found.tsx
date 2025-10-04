"use client";

import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-6">
      {/* Animasi angka 404 */}
      <motion.h1
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-8xl font-extrabold text-red-600"
      >
        404
      </motion.h1>

      {/* Subjudul */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-2xl font-semibold text-gray-800"
      >
        Oops! Page not found
      </motion.h2>

      {/* Deskripsi */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-2 text-gray-600 text-center max-w-md"
      >
        The page you’re looking for doesn’t exist or has been moved. Don’t
        worry, let’s get you back on track!
      </motion.p>

      {/* Tombol balik */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-2 text-white font-medium shadow hover:bg-red-700 transition"
        >
          <FaHome className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
