import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import "./App.css";
import { LeftSection } from "./layout/left-section/left-section";
import { RightSection } from "./layout/right-section/right-section";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Container fluid className="h-100 d-flex flex-column ">
        <Row className="h-100">
          <LeftSection></LeftSection>
          <RightSection></RightSection>
        </Row>
      </Container>
    </div>
  );
}

export default App;
