import React from "react";
import img from "../assets/swirl-arrow-right-icon.webp";
import img1 from "../assets/ex-1.webp";
import img2 from "../assets/ex-2.jpg";
import img3 from "../assets/ex-3.jpg";
export const Experience = () => {
  return (
    <div className="experience-component">
      <div className="logo">
        <img src={img} alt="" />
      </div>
      <div className="contant">
        <div className="left">
          <h1>
            Experiences <br />
            Designed To Be <br />
            Shared
          </h1>
          <p>Follow us for more from 24 Carrots.</p>
          <div className="insta">
            <div className="insta-one">
              <i class="bi bi-instagram"></i>INSTAGRAM
            </div>
            <div className="insta-two">
              <i class="bi bi-instagram"></i>PINTEREST{" "}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img-one">
			<a href="https://www.instagram.com/24carrotscatering/reel/C3yNl-byJO1/" target="_blank">
            <img src={img1} alt="" />
            <i class="bi bi-play-fill"></i>
			</a>
          </div>
          <div className="img-two">
			<a href="https://www.instagram.com/24carrotscatering/reel/C3slvkNuW5j/">
            <img src={img2} alt="" />
            <div className="play">
              <i class="bi bi-play-fill"></i>
            </div>
			</a>
          </div>
          <div className="img-three">
			<a href="https://www.instagram.com/24carrotscatering/reel/C3rArjuNrlE/">
            <img src={img3} alt="" />
            <div className="play">
              <i class="bi bi-play-fill"></i>
            </div>
			</a>
          </div>
        </div>
      </div>
    </div>
  );
};
