import React from "react";
import { Button } from "primereact/button";
import club from "../../assets/images/club.jpg"; // Correctly imported image

const HeroBanner = () => {
  return (
    <div
      className="hero-banner d-flex align-items-center justify-content-center text-center position-relative"
      style={{
        backgroundImage: `url(${club})`, // Use the imported variable here
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "gold",
      }}
    >
      <div
        className="overlay position-absolute w-100 h-100"
        style={{
        //   backgroundColor: "rgba(0, 0, 0, 0.7)", // Black overlay
        }}
      ></div>
      {/* <div className="content position-relative z-3">
        <h1 className="display-4 fw-bold mb-4">Welcome to Club Luxe</h1>
        <p className="fs-5 mb-4">
          Your ultimate destination for exclusive table bookings and unforgettable nights.
        </p>
        <Button
          label="Book Your Table"
          className="p-button-rounded p-button-lg"
          style={{ backgroundColor: "gold", color: "black", border: "none" }}
        />
      </div> */}
    </div>
  );
};

export default HeroBanner;
