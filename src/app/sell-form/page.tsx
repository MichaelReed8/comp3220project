"use client"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import React from "react";
import Modal from "react-bootstrap/Modal";


const sellPage: React.FC = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => {
      (document.getElementById('my_modal_1')! as HTMLDialogElement).showModal();
    }



    const [formData, setFormData] = useState({
        addr: '',
        price: '',
        city: '',
        acres: '',
        bed: '',
        bath: '',
        state: '',
        zip: '',
        contact: '',
        sqft: ''
      });
    
      // Handle form field changes
      const handleChange = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const entry = parseData();
        /* entry needs to be sent to back-end to be inputted */
        console.log(entry);
        console.log('Form submitted:', formData);
        countdown(10);
        setTimeout(handleShow,0);
      };

      function parseData() {
        var metaData: string;
        metaData = formData.contact + ",for_sale," + formData.price + "," + formData.bed + "," + formData.bath + "," + formData.acres + "," + formData.addr + "," + formData.city + "," + formData.state + "," + formData.zip + "," + formData.sqft + ", n/a";
        return metaData;
      }
    
      function countdown(startTime: number) {
        const element = document.getElementById("countdown")!;
        element.textContent = "Redirecting you to home page in " + startTime.toString() + " seconds.";
        startTime--;
        const timer = setInterval(() => {
          element.textContent = "Redirecting you to home page in " + startTime.toString() + " seconds.";

          if (startTime <= 0) {
            clearInterval(timer);
            window.location.href = "/";
          }
          startTime--;

        }, 1000);
      }

      
      return (
        <>
        <h1 className="text-center mb-4">Please enter your house information</h1>
        <Container className=" justify-content-center align-items-center" style={{  height: '100vh' }}>
       
          <dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-white">
    <h3 className="font-bold text-lg">Form Submitted!</h3>
    <div className="py-4" id="countdown"></div>
    <p>Press Close to be instantly redirected</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn" onClick={() => window.location.href = "/"}>Close</button>
      </form>
    </div>
  </div>
</dialog>
          <Row>
          <Col md={2} lg={2}></Col>
          <Col md={8} lg={8}>
          
          <Form onSubmit={handleSubmit} className="mb-3" style={{ textAlign:"center", width: '100%' }}>
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Address</Form.Label>
              <Form.Control 
                type="text" 
                name="addr" 
                value={formData.addr} 
                onChange={handleChange} 
                placeholder="1234 Address St." 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>City</Form.Label>
              <Form.Control 
                type="text" 
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                placeholder="Detroit" 
                required 
              />
            </Form.Group>
            <Row className="mb-3">
              <Col>
            {/* Age Input */}
            <Form.Group controlId="age">
              <Form.Label>Square Footage</Form.Label>
              <Form.Control 
                type="number" 
                name="sqft" 
                value={formData.sqft} 
                onChange={handleChange} 
                placeholder="1234" 
                required 
              />
            </Form.Group>
              </Col>
              <Col>
            {/* Email Input */}
            <Form.Group controlId="email">
              <Form.Label>Lot Size in Acres</Form.Label>
              <Form.Control
                type="number"  
                name="acres" 
                value={formData.acres} 
                onChange={handleChange} 
                placeholder="1.2" 
                required 
              />
            </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
            {/* Phone Input */}
            <Form.Group controlId="phone">
              <Form.Label>Number of Bedrooms</Form.Label>
              <Form.Control
                type="number" 
                name="bed" 
                value={formData.bed} 
                onChange={handleChange} 
                placeholder="2" 
                required 
              />
            </Form.Group>
          </Col>
          <Col>
            {/* Message Input */}
            <Form.Group controlId="message">
              <Form.Label>Number of Bathrooms</Form.Label>
              <Form.Control 
                type="number" 
                name="bath" 
                value={formData.bath} 
                onChange={handleChange} 
                placeholder="2" 
                required 
              />
            </Form.Group>
            </Col>
            </Row>
            <Row className="mt-3">
            <Col>
            {/* Phone Input */}
            <Form.Group controlId="phone">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control 
                type="number"
                name="zip" 
                value={formData.zip} 
                onChange={handleChange} 
                placeholder="12345" 
                required 
              />
            </Form.Group>
          </Col>
          <Col>
            {/* Message Input */}
            <Form.Group controlId="message">
              <Form.Label>State</Form.Label>
              <Form.Control 
                type="text" 
                name="state" 
                value={formData.state} 
                onChange={handleChange} 
                placeholder="Michigan" 
                required 
              />
            </Form.Group>
            </Col>
            </Row>
            <Row className="mt-3">
            <Col>
            {/* Phone Input */}
            <Form.Group controlId="phone">
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number"
                name="price" 
                value={formData.price} 
                onChange={handleChange} 
                placeholder="123456" 
                required 
              />
            </Form.Group>
          </Col>
          <Col>
            {/* Message Input */}
            <Form.Group controlId="message">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="contact" 
                value={formData.contact} 
                onChange={handleChange} 
                placeholder="name@example.com" 
                required 
              />
            </Form.Group>
            </Col>
            </Row>
            <style type="text/css">
        {`
    .btn-custom {
      background-color: #DF9287;
      color: white;
      margin-top: 20px;
    }

    
    `}
      </style>

      <Button variant="custom" size="lg" onClick={handleSubmit}>
        Submit
      </Button>
          </Form>
          </Col>
          </Row>
        </Container>
    </>
    );
}
export default sellPage;