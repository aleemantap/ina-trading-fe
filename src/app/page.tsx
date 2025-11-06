
import { cookies } from "next/headers";
import { redirect } from "next/navigation";



export default async function HomePage() {
  // const token = cookies().get("token");
  const cookieStore = await cookies(); // ✅ tambahkan await
  const token = cookieStore.get("token");
  console.log("kaprok",token)
  if (token) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}