import React from "react";
import { Col } from "react-bootstrap";

interface LeftSectionProps {}

export const LeftSection = (props: LeftSectionProps) => {
  return (
    <Col className="left-section wrapper" sm={3}>
        Hello world
    </Col>
  );
};
