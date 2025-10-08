import LoginForm from "./LoginForm";
import Image from "next/image";
import logo from "../../../../public/logo.png";
export default function LoginPage() {
  return (
    <>
      <div className="mb-0">
        <Image className="h-22 w-54" src={logo} alt="logo" />;
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
