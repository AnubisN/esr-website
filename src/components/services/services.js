import React from "react";
import "./services.css";

const Services = () => {
  return (
    <div className="section-container">
      <div className="section-headers">
        <h2>Services</h2>
      </div>
      <div className="service-services-container">
        <div className="service">
          <div className="service-container">
            <div className="service-img">
              <img src="./images/webDevelopment.png" />
            </div>
            <div className="service-content">
              <h3>
                Web & Mobile <br />
                Development
              </h3>
              <p>
                We are a leading development agency with immense design and
                development expertise. We build scalable websites, mobile
                applications, and elaborate online business services within your
                budget.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-container">
            <div className="service-img">
              <img src="./images/developersDemand.png" />
            </div>
            <div className="service-content">
              <h3>
                Developers <br />
                On-Demand
              </h3>
              <p>
                If you need exceptional full-time developers at a cost
                unavailable elsewhere, we will enrich your development team by
                pooling the best resources worldwide.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service-container">
            <div className="service-img">
              <img src="./images/otherServices.png" />
            </div>
            <div className="service-content">
              <h3>
                Other <br />
                Services
              </h3>
              <p>
                We provide technical consulting to enterprises on cyber
                security, data science, machine learning and product design. We
                have serviced telecom, education, healthcare, energy, banking
                and financials sectors.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
