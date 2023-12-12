"use client";

import { useState } from "react";
import { toast, toastDict } from "@/lib/toastify";
import data from "@/data/institutes.json";

export default function RegisterUser() {
  const [formData, setFormData] = useState({
    eventCode: "Q1",
    instituteID: "IITDH",
    pids: ["KGP-0001", "def", "1234", "2345", "214", "ass"],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("../../api/event/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Registered for event Successfully!", toastDict);
      } else {
        toast.error("Error in registering.", toastDict);
      }
    } catch (error) {
      toast.error("Something went wrong! Please try again.", toastDict);
    }
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [name]: value,
  //     };
  //   });
  // };

  return (
    <div>
      <h1>Register for Event</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="pid">PID </label>
        <input
          type="text"
          id="pid"
          name="pid"
          value={formData.pid}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Name </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="phone">Phone </label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="gender">Gender </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <br />
        <label htmlFor="instituteID">Institute </label>
        <select
          id="instituteID"
          name="institudeID"
          value={formData.instituteID}
          onChange={handleChange}
        >
          {Object.keys(data).map((ID, index) => {
            return (
              <option value={ID} key={index}>
                {data[ID]}
              </option>
            );
          })}
        </select>
        <br />
        <label htmlFor="hall">Hall </label>
        <input
          type="text"
          id="hall"
          name="hall"
          value={formData.hall}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="mess">Mess </label>
        <input
          type="text"
          id="mess"
          name="mess"
          value={formData.mess}
          onChange={handleChange}
        />
        <br /> */}
        <button>Register</button>
      </form>
    </div>
  );
}
