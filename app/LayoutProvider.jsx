"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import bg from "@/public/assets/images/bg-image.png";

export default function LayoutProvider({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return children;
  }

  const isGenrePage = pathname.startsWith("/events/");

  useEffect(() => {
    if (isGenrePage) {
      document.body.style.backgroundImage = "none";
    } else {
      document.body.style.backgroundImage = `url(${bg.src})`;
    }
  }, [isGenrePage]);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
