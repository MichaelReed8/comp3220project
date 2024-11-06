"use client"
import Image from "next/image";
import { Row, Col, Form, Button} from "react-bootstrap"


export default function Home() {
  const navigateToSellForm = () => {
    window.location.href = "/sell-form";
};
  return (
     <>
     <Row>
      <Col>
      hello
      <Button onClick={navigateToSellForm}> click me</Button>
      </Col>
      
     </Row>
     
     </>
  );
}
