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
        name: '',
        age: '',
        email: '',
        phone: '',
        message: ''
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
        <Container className=" justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Form onSubmit={handleSubmit} style={{ textAlign:"center", width: '100%' }}>
            <h2 className="text-center mb-4">Please Provide Your Information</h2>
            
            {/* Name Input */}
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter your full name" 
                required 
              />
            </Form.Group>
    
            {/* Age Input */}
            <Form.Group controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleChange} 
                placeholder="Enter your age" 
                required 
              />
            </Form.Group>
    
            {/* Email Input */}
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter your email" 
                required 
              />
            </Form.Group>
    
            {/* Phone Input */}
            <Form.Group controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Enter your phone number" 
                required 
              />
            </Form.Group>
    
            {/* Message Input */}
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                type="text" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Enter a message" 
                required 
              />
            </Form.Group>
    
            {/* Submit Button */}
            <Button variant="primary">
              Submit
            </Button>
          </Form>
        </Container>
    
    );
}
export default sellPage;