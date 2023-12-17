"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, toastDict } from "@/lib/toastify";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";
import BackButton from "@/components/BackButton";

function findEventByCode(code) {
  for (const genre in eventsData) {
    for (const event in eventsData[genre].events) {
      if (eventsData[genre].events[event].code === code) {
        return {
          ...eventsData[genre].events[event],
          link: "/events/" + genre + "/" + event,
        };
      }
    }
  }
  return null;
}

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: localStorage.getItem("interiit-cultural-token"),
          }),
        });
        const { user, events } = await res.json();
        if (!user) {
          toast.error("User not found.", toastDict);
          return;
        }
        setUser({
          ...user,
          events: events,
        });
      } catch (error) {
        toast.error("Something went wrong! Please try again.", toastDict);
      }
    };
    if (!localStorage.getItem("interiit-cultural-token")) {
      router.push("/signin");
    } else {
      loadData();
    }
  }, []);

  const [page, setPage] = useState(0);

  const ProfilePage = () => {
    return (
      <div>
        <h1>My Profile</h1>
        <button
          onClick={() => {
            localStorage.removeItem("interiit-cultural-token");
            router.push("/signin");
          }}
        >
          Sign Out
        </button>
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
        Institute : {institutes[user.instituteID]}
        <br />
        Phone Number : {user.phone}
        <br />
        Email : {user.email}
        <br />
        Gender : {user.gender}
        <br />
      </div>
    );
  };

  const EventDetailsPage = () => {
    return (
      <div>
        <h1>Registered Event Details</h1>
        {user.events.map((event) => {
          event = {
            ...event,
            ...findEventByCode(event.eventCode),
          };
          return (
            <div>
              <Link href={event.link}>
                <h3>{event.name}</h3>
              </Link>
              <p>
                Institute - {institutes[event.instituteID]}
                <br />
                Participants
                <br />
                {event.pids.map((pid) => (
                  <>
                    {pid} <br />
                  </>
                ))}
                Score - {event.score}
              </p>
            </div>
          );
        })}
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
