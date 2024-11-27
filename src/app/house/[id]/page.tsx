/**
 * Author: Nathan Serre
 * Title: House Page
 * Date: November 27th
 * Description: A proof of concept page to show what a
 * OnClick event of a specific house may look like. These would
 * be replaced by another page when properly implemented from houses 
 * returned by the backend
 * Last Modified: November 19th
 */
"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import House from "../../../classes/House";
import { mockHouses } from "../../mockHouses";
import { Carousel } from "react-responsive-carousel";
import Modal from "react-modal";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HousePage.css";

const HousePage: React.FC = () => {
  const { id } = useParams();

  const house = mockHouses.find((h) => h.id === parseInt(id as string, 10));

  const [showEmailInput, setShowEmailInput] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
  }, []);

  const handleInterestedClick = () => {
    setShowEmailInput(true);
  };

  const handleCloseModal = () => {
    setShowEmailInput(false);
    setSubmitted(false);
    setEmail("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!house) {
    return <h1>House not found</h1>;
  }

  return (
    <div className="house-page">
      <h1>{house.street}</h1>
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
        {house.photos.map((photo, index) => (
          <div key={index}>
            <img src={photo.url} alt={photo.altText || "House image"} />
          </div>
        ))}
      </Carousel>
      <p>Price: ${house.price.toLocaleString()}</p>
      <p>Bedrooms: {house.bedrooms}</p>
      <p>Bathrooms: {house.bathrooms}</p>
      <p>{house.metadata}</p>
      <h3>Realtor Information</h3>
      <p>{house.realtor.name}</p>
      <p>{house.realtor.email}</p>
      <p>{house.realtor.phone}</p>
      <button className="interested-button" onClick={handleInterestedClick}>
        I'm Interested
      </button>
      <Modal
        isOpen={showEmailInput}
        onRequestClose={handleCloseModal}
        contentLabel="Email Form"
        className="email-modal"
        overlayClassName="email-modal-overlay"
      >
        {!submitted ? (
          <form onSubmit={handleSubmit} className="email-form">
            <label>
              Enter your email address:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseModal} className="close-button">
              Close
            </button>
          </form>
        ) : (
          <div>
            <p>Thank you! The realtor will contact you soon.</p>
            <button onClick={handleCloseModal} className="close-button">
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HousePage;

