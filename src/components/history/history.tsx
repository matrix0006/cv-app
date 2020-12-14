import React from "react";

export interface WorkHistoryProps {
  position?: string;
  companyName?: string;
  period?: string;
  description?: string;
  techStack?: string[];
}

export const History = (props: WorkHistoryProps) => {
  const { position, companyName, period, description, techStack } = props;
  return (
    <div>
      <strong>{position}</strong>/ {companyName} / <strong>{period}</strong>
      <br></br>
      {techStack?.join('/ ')}
      <br></br>
      {description}
      <hr></hr>
    </div>
  );
};
