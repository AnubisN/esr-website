import React, { useState } from "react";
import "./testimonialSlider.css";
import dataSlider from "../../utils/sliderData";

function TestimonialSlider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="testimonial-section">
      <div className="services-section"></div>
      <h2>Testimonials</h2>
      <div className="slider-container">
        {dataSlider.map((obj, index) => {
          return (
            <div
              className={slideIndex === index + 1 ? "active-anim" : "slide"}
              key={obj.id}
            >
              <div className="slide-userInfo">
                <p className="slide-userInfo-testimony">{obj.testimony}</p>
                <p className="slide-userInfo-userName">{obj.userName}</p>
                <span className="slide-userInfo-userPosition">
                  {obj.userPosition}
                </span>
              </div>
              <div className="slide-userImg">
                <img src={`${obj.image}`} alt="client-img" />
              </div>
            </div>
          );
        })}
        <div className="container-dots">
          {Array.from({ length: dataSlider.length }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
