import React from "react";
import "../../styles/container.scss";
import { History, WorkHistoryProps } from "../../components/history/history";

const histories: WorkHistoryProps[] = [
  {
    companyName: "Teso",
    period: "Feb 2020 - Aug 2020",
    description: "Lorem ipsum",
    position: "Front-end Developer",
  },
  {
    companyName: "Starbap",
    period: "Aug 2020 - Now",
    description: "Lorem ipsum",
    position: "Front-end Developer",
  },
];

export const WorkHistory = () => {
  return (
    <div className="content-wrap">
      <h1>Work History</h1>
      <hr></hr>
      {histories.map((history) => (
        <History {...history}></History>
      ))}
    </div>
  );
};
