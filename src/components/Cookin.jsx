import React from "react";
import img1 from "../assets/cookin-1.jpg";
import img2 from "../assets/cookin-2.jpg";
const Cookin = () => {
  return (
    <div className="cookin-component">
      <div className="title">
        <h5>What’s Cookin’</h5>
      </div>
      <div className="contant">
        <div className="con-one">
          <div className="img-sec">
            <img src={img1} alt="" />
            <div className="hover-item">
              <div className="button">
                READ MORE
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="sub-title">24 CARROTS CATERING CATERING</div>
          <h5>Setting Your Holiday Table</h5>
          <p>
            Our sophisticated flavor expertise enables us to create inventive
            concoctions that generate buzz in more ways than one!
          </p>
        </div>
        <div className="con-two">
          <div className="img-sec">
            <img src={img2} alt="" />
            <div className="hover-item">
              <div className="button">
                READ MORE
                <i className="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
          <div className="sub-title">24 CARROTS CATERING FEATURED VENUES</div>
          <h5>The BEST Venues for Big Holiday Bashes</h5>
          <p>
            Make the most the holiday season by thinking BIG! Invite everyone
            from friends family, clients and the entire company to join in on
            the fun…
          </p>
        </div>
      </div>
      <div className="button">
        MORE FROM THE BLOG <i className="bi bi-arrow-right"></i>
      </div>
    </div>
  );
};

export default Cookin;
