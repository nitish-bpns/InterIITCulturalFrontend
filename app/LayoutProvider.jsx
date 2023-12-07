"use client";

import Footer from "@/components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import { AuthProvider } from "@/lib/Providers.js";
import { usePathname } from "next/navigation";

export default function LayoutProvider({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  return (
    <>
      <AuthProvider>
        {<Navbar />}
        {children}
      </AuthProvider>
      <Footer />
    </>
  );
}
