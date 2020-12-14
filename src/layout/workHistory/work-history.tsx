import React from "react";
import { History, WorkHistoryProps } from "../../components/history/history";
import "../../styles/container.scss";

const histories: WorkHistoryProps[] = [
  {
    companyName: "Starbap",
    period: "Aug 2020 - Now",
    description:
      "Working on a budget management web application for network operator company Mobifone",
    position: "Front-end Developer",
    techStack: ['Angular', 'Bootstrap', 'RxJS', 'Typescript', 'RamdaJS'],
  },
  {
    companyName: "Teso",
    period: "Feb 2020 - Aug 2020",
    description:
      "Working on an HR and staff evaluation project for a Japanese client",
    position: "Front-end Developer",
    techStack: ['Angular', 'Bootstrap', 'Typescript'],
  },
];

export const WorkHistory = () => {
  return (
    <div className="content-wrap">
      <h1>Work History</h1>
      <hr></hr>
      {histories.map((history, index) => (
        <History key={index} {...history}></History>
      ))}
    </div>
  );
};
