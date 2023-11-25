import PageStyles from "./LeaderboardTable.module.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../public/assets/fonts/Dreaming.woff2" });
const colWidth = [27, 53, 20];

export default function LeaderboardTable(props) {
  const { data } = props;
  return (
    <div className={PageStyles["table"]}>
      <div
        className={PageStyles["tr"]}
        style={{
          background: "#FCDDBB",
        }}
      >
        <div
          style={{
            width: colWidth[0] + "%",
          }}
          className={PageStyles["th"] + " " + myFont.className}
        >
          Position
        </div>
        <div
          style={{
            width: colWidth[1] + "%",
          }}
          className={PageStyles["th"] + " " + myFont.className}
        >
          College Name
        </div>
        <div
          style={{
            width: colWidth[2] + "%",
          }}
          className={PageStyles["th"] + " " + myFont.className}
        >
          Points
        </div>
      </div>
      {data.map((value, index) => (
        <div className={PageStyles["tr"]} key={index}>
          <div
            style={{
              width: colWidth[0] + "%",
            }}
            className={PageStyles["td"]}
          >
            {value.position}
          </div>
          <div
            style={{
              width: colWidth[1] + "%",
            }}
            className={PageStyles["td"]}
          >
            {value.collegeName}
          </div>
          <div
            style={{
              width: colWidth[2] + "%",
            }}
            className={PageStyles["td"]}
          >
            {value.points}
          </div>
        </div>
      ))}
    </div>
  );
}
