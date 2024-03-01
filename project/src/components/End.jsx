import React from "react";
import img from "../assets/end.webp";

const End = () => {
  return (
    <div className="footer">
      <div className="end-component">
        <div className="right">
          <div className="title">Endless Inspiration</div>
          <div className="sub-title">
            Sign up to our newsletter for fresh updates, encouragement, <br />{" "}
            and exclusive insights.
          </div>
          <div className="input">
            <input type="text" placeholder="Enter Your Email" />
            <button>
              SIGN UP
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
          <p>
            By clicking Sign Up you’re confirming that you agree with our Terms
            and Conditions.
          </p>
        </div>
        <div className="left">
          <img src={img} alt="" />
        </div>
      </div>
      <footer>Designed By Gowtham-Mathiyazhagan</footer>
    </div>
  );
};

export default End;
