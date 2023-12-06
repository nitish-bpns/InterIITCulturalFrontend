"use client";

import { signOut, useSession } from "next-auth/react";
import { toast, toastDict } from "@/lib/toastify";

const handleSumbit = async () => {
  const data = {
    name: "Saharsh Agrawal",
    email: "saharshagrawal@gmail.com",
    password: "saharsh123",
  };

  try {
    const res = await fetch("api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("Registered Successfully!", toastDict);
    } else {
      toast.error("Error in registering.", toastDict);
    }
  } catch (error) {
    toast.error("Something went wrong! Please try again.", toastDict);
  }
};

export default function Profile() {
  const { data: session } = useSession();

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       const res = await fetch("api/user", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email: "saharshagrawal@gmail.com" }),
  //       });
  //       const { user } = await res.json();
  //       if (!user) {
  //         toast.error("User not found.", toastDict);
  //         return;
  //       }
  //       setUser(user);
  //     } catch (error) {
  //       toast.error("Something went wrong! Please try again.", toastDict);
  //     }
  //   };
  //   loadData();
  // }, []);

  return (
    <div>
      <h1>Profile Page</h1>
      Name : {session?.user?.name}
      <br />
      Email : {session?.user?.email}
      <br />
      Age : 20
      <br />
      College : IIT Kharagpur
      <br />
      Branch : Industrial and Systems Engineering
      <br />
      Year : 3rd
      <br />
      <button onClick={handleSumbit}>Register</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
