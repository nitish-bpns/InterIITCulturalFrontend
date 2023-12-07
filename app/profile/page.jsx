"use client";

import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { toast, toastDict } from "@/lib/toastify";
import data from "@/data/institutes.json";
import BackButton from "@/components/BackButton";

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

  const [page, setPage] = useState(0);

  const ProfilePage = () => {
    return (
      <div>
        <h1>My Profile</h1>
        <button onClick={() => signOut()}>Sign Out</button>
        <br />
        <button onClick={() => setPage(1)}>Personal Information</button>
        <br />
        <button onClick={() => setPage(2)}>Event Details</button>
        <br />
        <button onClick={() => setPage(3)}>Accomodation Details</button>
      </div>
    );
  };

  const PersonalInfoPage = () => {
    return (
      <div>
        <h1>Personal Info</h1>
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
      </div>
    );
  };

  const EventDetailsPage = () => {
    return (
      <div>
        <h1>Event Details</h1>
      </div>
    );
  };

  const AccomodationPage = () => {
    return (
      <div>
        <h1>Accomodation</h1>
        <img src="https://www.iitism.ac.in/assets/img/Hostel/Hostel%20Block%20I.jpg" />
        <br />
        Hall of Residence : {user.hall}
        <br />
        Mess : {user.mess}
        <br />
        Contact Details : +9876543210
        <br />
      </div>
    );
  };

  return user ? (
    <>
      {page == 0 ? (
        <ProfilePage />
      ) : (
        <BackButton
          onClick={() => {
            setPage(0);
          }}
        />
      )}
      {page == 1 && <PersonalInfoPage />}
      {page == 2 && <EventDetailsPage />}
      {page == 3 && <AccomodationPage />}
    </>
  ) : (
    "Loading..."
  );
}
