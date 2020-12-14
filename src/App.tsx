import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./App.scss";
import { Blockquote } from "./layout/blockquote/blockquote";
import { Header } from "./layout/header/header";
import { Skills } from "./layout/skills/skills";
import { WorkHistory } from "./layout/workHistory/work-history";

function App() {
  return (
    <Container>
      <Header></Header>
      <Blockquote></Blockquote>
      <WorkHistory></WorkHistory>
      <Skills></Skills>
    </Container>
  );
}

export default App;
