import React from "react";
import bg_venue from "../assets/venue1.jpg";
const Venues = () => {
  return (
    <div className="venues-component">
      <div className="full-vw-bg">
        <img src={bg_venue} alt="venues" />
      </div>
      <div className="circle-venue">
		<div className="circle-elements">
        <h6>VENUES</h6>
        <h1>
          Unforgattable <br /> Venues
        </h1>
        <p>
          24 Carrots is the exclusive or preferred caterer at Southern
          California’s most spectacular properties. From intimate understated
          spaces to large and luxurious, we’ll help you find the event venue
          that makes your heart skip a beat.
        </p>
        <div className="button">
          GET IN TOUCH <i className="bi bi-arrow-right"></i>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Venues;
