"use client";

import { useState } from "react";
import { toast, toastDict } from "@/lib/toastify";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import localFont from "next/font/local";
import Styles from "./SignInForm.module.css";

const myFont = localFont({
  src: "../public/assets/fonts/Dreaming.woff2",
});

export default function SignInForm() {
  const router = useRouter();
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
      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      if (res.ok) {
        toast.success("Signed in successfully", toastDict);
        router.push("/profile");
      } else {
        toast.error("Error while signing in.", toastDict);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", toastDict);
    }
  };

  return (
    <div className={Styles["signin-container"]}>
      <div className={Styles["signin-box"]}>
        <h1 className={`${myFont.className} ${Styles["heading"]}`}>Sign In</h1>
        <form onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
}
