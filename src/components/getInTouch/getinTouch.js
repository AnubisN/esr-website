import React, { useState } from "react";
import "./getinTouch.css";

const GetInTouch = () => {
  const [services, setServices] = useState({
    webApp: false,
    mobileApp: false,
    cyberSecurity: false,
    machineLearning: false,
    customSoftware: false,
  });

  const onClickServices = (name) => {
    const status = services[name];
    setServices((prevState) => ({
      ...prevState,
      [name]: !status,
    }));
  };

  return (
    <section className="getinTouch-section">
      <div className="contact-form">
        <div className="second-container">
          <form>
            <div className="first-form-group">
              <div className="form-group">
                <label for="name-input">First Name</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group">
                <label for="email-input">Enter your email</label>
                <input
                  id="email-input"
                  type="text"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="form-group">
              <label for="budget">Budget</label>
              <select name="budgets" id="budgets">
                <option value="" disabled selected>
                  Select your budget
                </option>
                <option value="<$10k">$10k</option>
                <option value="$10k - $50k">$10k - $50k</option>
                <option value="$50k - $100k">$50k - $100k</option>
                <option value="$100k - $250k">$100k - $250k</option>
                <option value="$250l+">$250k+</option>
              </select>
            </div>
            <div className="services-group">
              <label for="budget">Services</label>
              <div className="services-container">
                <div
                  className={
                    services.webApp
                      ? "services services-active services-one"
                      : "services services-one"
                  }
                  onClick={() => onClickServices("webApp")}
                >
                  <p defaultValue={"webApp"}>Web App</p>
                </div>
                <div
                  className={
                    services.mobileApp
                      ? "services services-active services-two"
                      : "services services-two"
                  }
                  name="mobileApp"
                  onClick={() => onClickServices("mobileApp")}
                >
                  <p>Mobile App</p>
                </div>
                <div
                  className={
                    services.cyberSecurity
                      ? "services services-active services-three"
                      : "services services-three"
                  }
                  name="cyberSecurity"
                  onClick={() => onClickServices("cyberSecurity")}
                >
                  <p>Cybersecurity</p>
                </div>
              </div>
              <div className="second-services-container">
                <div
                  className={
                    services.machineLearning
                      ? "services services-active services-four second-services"
                      : "services services-four second-services"
                  }
                  name="machineLearning"
                  onClick={() => onClickServices("machineLearning")}
                >
                  <p>Machine Learning</p>
                </div>
                <div
                  className={
                    services.customSoftware
                      ? "services services-active services-five second-services"
                      : "services services-five second-services"
                  }
                  name="customSoftware"
                  onClick={() => onClickServices("customSoftware")}
                >
                  <p>Custom Software</p>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="message-textarea">Notes</label>
              <textarea
                id="message-textarea"
                type="text"
                placeholder="Write your notes"
              ></textarea>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="line"></div>
        <div className="first-container">
          <div class="info-container">
            <h2>
              Let's Work <br />
              <span>Together</span>
            </h2>
            <div className="info info-email">
              <div className="info-img">
                <img src="./images/Vector.png" />
              </div>
              <p>hello@esrtech.io</p>
            </div>
            <div className="info info-phone">
              <div className="info-img">
                <img src="./images/phoneVector.png" />
              </div>
              <p>+1 513 255 5928</p>
            </div>
            <div className="info info-map">
              <div className="info-img">
                <img src="./images/locationVector.png" />
              </div>
              <div className="info-location">
                <div className="info-location-details">
                  <p>CALIFORNIA, USA</p>
                  <p>KANSAS, USA</p>
                  <p>TEXAS, USA</p>
                  <p>SINGAPORE, SINGAPORE</p>
                  <p>KATHMANDU, NEPAL</p>
                  <div className="info-social-medias">
                    <div className="social-media">
                      <img src="./images/Twitter.png" />
                    </div>
                    <div className="social-media">
                      <img src="./images/Linkedin.png" />
                    </div>
                    <div className="social-media">
                      <img src="./images/Youtube.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
