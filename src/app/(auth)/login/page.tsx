import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="mb-0">
        <img src="/logo.png" alt="Logo" className="h-22" />
      </div>
      <div className="flex  items-center justify-center">
        <div className="w-full max-w-md rounded bg-white p-6 shadow">
          <h1 className="mb-4 text-2xl font-bold">Sign In</h1>
          <LoginForm />
        </div>
      </div>
    </>
  );
}
