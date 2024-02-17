import React from "react";

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="left">
        <div className="about">
        <div>ABOUT</div>
        <div className="first-drop-down">
        <div>ABOUT 24 CARROTS</div>
        <div>TEAM</div>
        <div>AWARDS & PRESS</div>
        <div>BLOG</div>
      </div>
        </div>
        <div className="service">
        <div>SERVICES</div>
        <div className="second-drop-down">
        <div>GOURMENT CATERING</div>
        <div>BAR SERVICES</div>
        <div>STAFFING</div>
        <div>PRODUCTION</div>
      </div>
        </div>
        <div className="events">
        <div>EVENTS</div>
        <div className="third-drop-down">
        <div>WEDDINGS</div>
        <div>CORPORATE</div>
        <div>SOCIAL</div>
        <div>GALLERY</div>
      </div>
        </div>
      </div>
      <div className="middle">
        <div>24 CARROTS</div>
        <div>CATERING & EVENTS</div>
      </div>
      <div className="right">
        <div>VENUES</div>
        <div>CAREERS</div>
        <div>GET IN TOUCH</div>
      </div>
    </div>
  );
};

export default NavBar;