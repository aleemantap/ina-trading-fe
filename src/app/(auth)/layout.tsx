export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      {/* Logo */}
      {/* <div className="mb-0">
        <img src="/logo.png" alt="Logo" className="h-22" />
      </div> */}
      {children}
      {/* Footer */}
      {/* Divider gradient */}
      <div className="my-6 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

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
      <p className="mt-2 text-xs text-gray-500">© 2025, Inatrading.co.id</p>
    </div>
  );
}
