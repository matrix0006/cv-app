import React from "react";

export interface WorkHistoryProps {
  position?: string;
  companyName?: string;
  period?: string;
  description?: string;
  techStack?: string;
}

export const History = (props: WorkHistoryProps) => {
  const { position, companyName, period, description, techStack } = props;
  return (
    <div>
      <strong>{position}</strong>/ {companyName} / <strong>{period}</strong>
      <br></br>
      <strong>Tech stack:</strong> {techStack}
      <br></br>
      {description}
      <hr></hr>
    </div>
  );
};
