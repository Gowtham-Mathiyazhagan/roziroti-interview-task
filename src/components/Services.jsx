import React from "react";
import img from "../assets/Home_Services_GIF_R3.gif";
const Services = () => {
  return (
    <div className="service-component">
      <div className="service-left">
        <div className="first-child">
          <h5>Gourmet Catering</h5>
          <p>
            Our professionally-trained culinary team is passionate and proud of
            our diverse and thoughtful menu, always cooking up something that
            aligns with your great taste.
          </p>
          <div className="button">
            LEARN MORE <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="second-child">
          <h5>Bar Service</h5>
          <p>
            Our sophisticated flavor expertise enables us to create inventive
            concoctions that generate buzz in more ways than one!
          </p>
          <div className="button">
            LEARN MORE <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="service-mid">
        <img src={img} alt="" />
      </div>
      <div className="service-right">
        <div className="first-child">
          <h5>Staffing</h5>
          <p>
            The hand-selected team at 24 Carrots are just as important to our
            reputation as our gourmet food. Our staff is certainly the best at
            what they do, and you’ll work with professionals who genuinely care
            about the success of your event!{" "}
          </p>
          <div className="button">
            LEARN MORE <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <div className="second-child">
          <h5>Event Production</h5>
          <p>
            If mind-blowing spectacles and immersive guest experiences are what
            you’re after, the specialists at 24 Carrots can pull it off on an
            epic scale!
          </p>
          <div className="button">
            LEARN MORE <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
