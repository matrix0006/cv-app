import React from "react";
import { Col } from "react-bootstrap";

interface RightSectionProps {}

export const RightSection = (props: RightSectionProps) => {
  return (
    <Col className="right-section wrapper" sm={9}>
      Hello world 2
    </Col>
  );
};
