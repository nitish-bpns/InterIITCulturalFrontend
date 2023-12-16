"use client";

import { useState, useEffect } from "react";
import { toast, toastDict } from "@/lib/toastify";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
import Styles from "./SignInForm.module.css";

const myFont = localFont({
  src: "../../public/assets/fonts/Dreaming.woff2",
});

export default function SignInForm() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("interiit-cultural-token")) {
      router.push("/profile");
    }
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });
      const json = await res.json();
      if (res.ok) {
        toast.success(json.message, toastDict);
        localStorage.setItem("interiit-cultural-token", json.token);
        router.push("/profile");
      } else {
        toast.error(json.message, toastDict);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", toastDict);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={Styles["form"]}>
      <div className={Styles["input-container"]}>
        <label className={myFont.className}>Email:</label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          value={data.email}
          onChange={handleChange}
        />
      </div>
      <div className={Styles["input-container"]}>
        <label className={myFont.className}>Password:</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={data.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className={myFont.className}>
        Sign In
      </button>
    </form>
  );
}
