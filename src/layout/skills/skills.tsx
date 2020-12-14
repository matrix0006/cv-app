import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import angularLogo from "../../assets/icons/angular.png";
import typescriptLogo from "../../assets/icons/typescript.png";
import reactLogo from "../../assets/icons/react.png";
import "../../styles/container.scss";
import "./skills.scss";

const logos = [
  {
    name: "Typescript",
    import: typescriptLogo,
  },
  {
    name: "Angular",
    import: angularLogo,
  },
  {
    name: "React",
    import: reactLogo,
  }
];

export const Skills = () => {
  return (
    <div className="content-wrap">
      <h1>Skills</h1>
      <hr></hr>
      {logos.map((logo, index) => {
        return (
          <span className="mr-2">
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={<Tooltip id={`${index}`}>{logo.name}</Tooltip>}
            >
              <img src={logo.import} alt={logo.name}></img>
            </OverlayTrigger>
          </span>
        );
      })}
    </div>
  );
};
