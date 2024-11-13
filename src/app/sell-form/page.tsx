"use client"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import TFSAvars from "@/components/sell-form-interface";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import React from "react";


const sellPage: React.FC = () => {
    const [formData, setFormData] = useState({
        addr: '',
        price: '',
        city: '',
        acres: '',
        bed: '',
        bath: '',
        state: '',
        zip: '',
      });
    
      // Handle form field changes
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };
    
      // Handle form submission
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Optionally, you can send the form data to an API or handle it as needed
        alert('Form Submitted!');
      };
    
      return (
        <>
        <h1 className="text-center mb-4">Please enter your house information</h1>
        <Container className=" justify-content-center align-items-center" style={{  height: '100vh' }}>
          
          <Row>
          <Col md={2} lg={2}></Col>
          <Col md={8} lg={8}>
          
          <Form onSubmit={handleSubmit} className="mb-3" style={{ textAlign:"center", width: '100%' }}>
            {/* Name Input */}
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Full Address</Form.Label>
              <Form.Control 
                type="text" 
                name="address" 
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
                name="address" 
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
              <Form.Label>Price</Form.Label>
              <Form.Control 
                type="number" 
                name="age" 
                value={formData.price} 
                onChange={handleChange} 
                placeholder="123456" 
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
                name="size" 
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
                name="phone" 
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
                name="message" 
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
                name="phone" 
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
                type="number" 
                name="message" 
                value={formData.state} 
                onChange={handleChange} 
                placeholder="Michigan" 
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

      <Button variant="custom" size="lg">
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