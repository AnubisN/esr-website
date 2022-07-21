import React, { useState } from "react";
import "./portFolio.css";

export const Portfolio = () => {
  const [activeMenuList, setActiveMenuList] = useState({
    all: true,
    health: false,
    travel: false,
    energy: false,
    sports: false,
  });

  const getPreviousActiveMenu = () => {
    let returnVal = "";
    for (const key in activeMenuList) {
      if (activeMenuList[key] === true) {
        returnVal = key;
      }
    }
    return returnVal;
  };

  const onPortfolioFilterHandler = (name) => {
    const value = activeMenuList[name];
    const previousActiveMenu = getPreviousActiveMenu();
    const previousActiveValue = activeMenuList[previousActiveMenu];
    setActiveMenuList((defaultState) => ({
      ...defaultState,
      [name]: !value,
      [previousActiveMenu]: !previousActiveValue,
    }));
  };

  return (
    <div className="section-container">
      <div className="section-headers">
        <h2>Our Portfolio</h2>
      </div>
      <div className="portfolio-menu-container">
        <div className="portfolio-menu">
          <div
            className={
              activeMenuList.all ? "sub-menu sub-menu-one" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("all")}
          >
            <div className="sub-menu-icon">
              <img src="./images/allMenuIcon.png" alt="icon" />
            </div>
            <p>All</p>
          </div>
          <div
            className={
              activeMenuList.health
                ? "sub-menu sub-menu sub-menu-two"
                : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("health")}
          >
            <div className="sub-menu-icon">
              <img src="./images/healthIcon.png" alt="icon" />
            </div>
            <p>Health</p>
          </div>
          <div
            className={
              activeMenuList.travel ? "sub-menu sub-menu-three" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("travel")}
          >
            <div className="sub-menu-icon">
              <img src="./images/travelIcon.png" alt="icon" />
            </div>
            <p>Travel</p>
          </div>
          <div
            className={
              activeMenuList.energy ? "sub-menu sub-menu-four" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("energy")}
          >
            <div className="sub-menu-icon">
              <img src="./images/energyIcon.png" alt="icon" />
            </div>
            <p>Energy</p>
          </div>
          <div
            className={
              activeMenuList.sports ? "sub-menu sub-menu-five" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("sports")}
          >
            <div className="sub-menu-icon">
              <img src="./images/sportsIcon.png" alt="icon" />
            </div>
            <p>Sports</p>
          </div>
        </div>
      </div>

      <div className="portfolio-container">
        <div className="portfolio">
          <div className="portfolio-img">
            <img src="./images/iphoneX.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Jewel Trek</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/travelIcon.png" />
              </div>
              <p className="portfolio-desc-category">Travel</p>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-grey">
            <img src="./images/samsungs92.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Perfecto</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/foodIcon.png" />
              </div>
              <p className="portfolio-desc-category">Food</p>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-green">
            <img src="./images/Mockup2.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Global EMR</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/healthIcon.png" />
              </div>
              <p className="portfolio-desc-category">Food</p>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img">
            <img src="./images/iphoneX.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Jewel Trek</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/travelIcon.png" />
              </div>
              <p className="portfolio-desc-category">Travel</p>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-grey">
            <img src="./images/samsungs92.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Perfecto</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/foodIcon.png" />
              </div>
              <p className="portfolio-desc-category">Food</p>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="portfolio-img portfolio-green">
            <img src="./images/Mockup2.png" />
          </div>
          <div className="portfolio-desc">
            <p className="portfolio-desc-title">Global EMR</p>
            <div className="portfolio-desc-sub-category">
              <div className="portfolio-desc-sub-category-img">
                <img src="./images/healthIcon.png" />
              </div>
              <p className="portfolio-desc-category">Food</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
