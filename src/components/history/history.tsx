import React from "react";

export interface WorkHistoryProps {
  position?: string;
  companyName?: string;
  period?: string;
  description?: string;
}

export const History = (props: WorkHistoryProps) => {
  const { position, companyName, period, description } = props;
  return (
    <div>
      <strong>{position}</strong>/ {companyName} / <strong>{period}</strong>
      <p>{description} </p>
      <hr></hr>
    </div>
  );
};
