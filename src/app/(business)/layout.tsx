import Link from "next/link";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#6B6FF1] py-3 px-40 flex items-center justify-between h-12">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="INA Trading" className="h-12" />
        </div>

        {/* Steps */}
        <nav className="flex gap-8 text-white text-sm font-medium">
          <Link href="/account" className="flex items-center gap-2">
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-indigo-600 text-xs font-bold">
              1
            </span>
            <span className="text-xs">ACCOUNT CREATION</span>
          </Link>
          <Link href="/details" className="flex items-center gap-2 opacity-70">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-xs">
              2
            </span>
            <span className="text-xs">BUSINESS DETAILS</span>
          </Link>
          <Link href="/finish" className="flex items-center gap-2 opacity-70">
            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white text-xs">
              3
            </span>
            <span className="text-xs">FINISH</span>
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex items-center justify-center py-12">{children}</main>
      {/* Footer */}
      {/* Divider gradient */}
      <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      {/* Footer */}

      <div className="mt-6 text-center text-xs text-gray-600 space-x-4">
        <a href="#" className="text-blue-600 hover:underline">
          Terms & Conditions
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Help
        </a>
      </div>
      <p className="mt-2 text-xs text-center text-gray-500">
        © 2025, Inatrading.co.id
      </p>
    </div>
  );
}
