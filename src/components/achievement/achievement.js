import React from "react";
import "./achievement.css";

function Achievement() {
  return (
    <>
      <div>
        <section className="unique-section">
          <h2 className="unique-txt"> Achievements</h2>
        </section>
      </div>
      <div className="achievements-container">
        <div>
          <div className="bottons-section">
            <section className="container">
              <div className="hexagon-container">
                <div className="hexagon">
                  <div className="txt">
                    <span className="txt-in">50+</span>
                    <br />
                    successful project
                  </div>
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <div className="txt">
                    <span className="txt-in">5</span> <br />
                    offices worldwide
                  </div>
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <div className="txt">
                    {" "}
                    <span className="txt-in">all</span> <br />
                    major tech stacks
                  </div>
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <div className="txt">
                    <span className="txt-in">30+</span> <br />
                    team members
                  </div>
                </div>
              </div>
              <div className="hexagon-container">
                <div className="hexagon">
                  <div className="txt">
                    <span className="txt-in">24/7</span> <br />
                    availability
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievement;
