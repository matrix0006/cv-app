import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/container.scss";
import "./header.scss";

const linkedinUrl = "https://www.linkedin.com/in/lehhtrieu";
const githubUrl = "https://github.com/matrix0006/";

export const Header = () => {
  return (
    <Row className="header">
      <Col sm={6} className="header__left">
        <h1 className="display-4">Lê Huỳnh Hải Triều</h1>
        <h2>Developer</h2>
      </Col>
      <Col sm={6}>
        <div className="float-right">
          <a target="_blank" rel="noreferrer" href={linkedinUrl}>
            linkedin
          </a>
          /
          <a target="_blank" rel="noreferrer" href={githubUrl}>
          github
          </a>
        </div>
      </Col>
    </Row>
  );
};
