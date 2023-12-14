"use client";

import { useEffect, useState } from "react";

import LeaderboardTable from "@/components/LeaderboardTable";
import institutes from "@/data/institutes.json";
import eventsData from "@/data/events.json";

export default function LeaderboardComponent({ allowChange }) {
  const [eventCode, setEventCode] = useState("all");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:3000/api/event/score/", {
        method: "POST",
        body: JSON.stringify({
          eventCode: eventCode,
        }),
      });
      const score = await res.json();

      const data = score
        .sort((a, b) => b.score - a.score)
        .map((value, index) => {
          return {
            position: index + 1,
            collegeName: institutes[value.institute],
            points: value.score,
          };
        });
      setData(data);
    };
    getData();
  }, [eventCode]);

  return (
    <>
      {allowChange && (
        <select
          style={{
            width: "100%",
            height: "100%",
            background: "#fef0df",
            borderRadius: "20px",
            padding: "20px",
            fontSize: "40px",
            fontWeight: "200",
            marginBottom: "40px",
          }}
          onChange={(e) => {
            setEventCode(e.target.value);
          }}
        >
          <option value="all">Overall</option>
          {Object.keys(eventsData).map((genre) => {
            const events = eventsData[genre].events;
            const obj = Object.keys(events).map((event, index) => (
              <option value={events[event].code} key={index}>
                {eventsData[genre].properName + " - " + events[event].name}
              </option>
            ));
            return obj;
          })}
        </select>
      )}
      <LeaderboardTable data={data} />
    </>
  );
}
