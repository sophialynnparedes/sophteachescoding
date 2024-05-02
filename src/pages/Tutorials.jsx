import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import Button from "../components/Button";
import { useState } from "react";

export default function Tutorials() {
  const [topic, setTopic] = useState(0);

  return (
    <>
      <Row align="center">
        <Col align="center" width="45%">
          <Title subtitle="Choose a Topic:" />
          <Button
            image="html.png"
            id="icon"
            method={() => {
              setTopic(1);
            }}
          />
        </Col>
        <Col align="center" width="45%"></Col>
      </Row>
    </>
  );
}
