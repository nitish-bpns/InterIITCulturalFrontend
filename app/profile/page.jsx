"use client";

import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { toast, toastDict } from "@/lib/toastify";
import data from "@/data/institutes.json";

export default function Profile() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: session?.user?.email }),
        });
        const { user } = await res.json();
        if (!user) {
          toast.error("User not found.", toastDict);
          return;
        }
        setUser(user);
      } catch (error) {
        toast.error("Something went wrong! Please try again.", toastDict);
      }
    };
    if (session?.user?.email) loadData();
  }, [session?.user?.email]);

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <>
          PID : {user.pid}
          <br />
          Name : {user.name}
          <br />
          Email : {user.email}
          <br />
          Gender : {user.gender}
          <br />
          Institute : {data[user.instituteID]}
          <br />
          Hall Allotted : {user.hall}
          <br />
          Mess Allotted : {user.mess}
          <br />
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
