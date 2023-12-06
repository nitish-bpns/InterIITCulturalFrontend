import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import SignInForm from "@/components/SignInForm";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/profile");

  return <SignInForm />;
}
