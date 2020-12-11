import React from "react";

interface cardProps {
  children?: React.ReactNode;
}

export function Card({ children }: cardProps) {
  return (
    <div className="card">
      Hello
      {children}
    </div>
  );
}
