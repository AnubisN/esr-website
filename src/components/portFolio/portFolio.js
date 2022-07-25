import React, { useState } from "react";
import "./portFolio.css";
import portfolioData from "../../utils/portfolioData";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const [activeMenuList, setActiveMenuList] = useState({
    All: true,
    Food: false,
    Travel: false,
    Energy: false,
    Sports: false,
  });
  const [portfolio, setPortfolio] = useState([...portfolioData]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([
    ...portfolioData,
  ]);
  const categoryIcon = {
    Travel: "./images/travelIcon.png",
    Food: "./images/foodIcon.png",
  };

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
    if (name === "All") {
      setFilteredPortfolio([...portfolioData]);
    } else {
      const filterPortfolio = portfolio.filter((el) => el.category === name);
      setFilteredPortfolio([...filterPortfolio]);
    }
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
              activeMenuList.All ? "sub-menu sub-menu-one" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("All")}
          >
            <div className="sub-menu-icon">
              <img src="./images/allMenuIcon.png" alt="icon" />
            </div>
            <p>All</p>
          </div>
          <div
            className={
              activeMenuList.Food
                ? "sub-menu sub-menu sub-menu-two"
                : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("Food")}
          >
            <div className="sub-menu-icon">
              <img src="./images/healthIcon.png" alt="icon" />
            </div>
            <p>Health</p>
          </div>
          <div
            className={
              activeMenuList.Travel ? "sub-menu sub-menu-three" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("Travel")}
          >
            <div className="sub-menu-icon">
              <img src="./images/travelIcon.png" alt="icon" />
            </div>
            <p>Travel</p>
          </div>
          <div
            className={
              activeMenuList.Energy ? "sub-menu sub-menu-four" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("Energy")}
          >
            <div className="sub-menu-icon">
              <img src="./images/energyIcon.png" alt="icon" />
            </div>
            <p>Energy</p>
          </div>
          <div
            className={
              activeMenuList.Sports ? "sub-menu sub-menu-five" : "sub-menu"
            }
            onClick={() => onPortfolioFilterHandler("Sports")}
          >
            <div className="sub-menu-icon">
              <img src="./images/sportsIcon.png" alt="icon" />
            </div>
            <p>Sports</p>
          </div>
        </div>
      </div>

      <motion.div layout className="portfolio-container">
        {filteredPortfolio.map((el, id) => {
          return (
            <motion.div layout className="portfolio" key={el.id}>
              <div
                className={
                  el.id === 3 || el.id === 6
                    ? "portfolio-img portfolio-green"
                    : "portfolio-img"
                }
              >
                <img src={`${el.image}`} alt="portfolio-img" />
              </div>
              <div className="portfolio-desc">
                <p className="portfolio-desc-title">{el.name}</p>
                <div className="portfolio-desc-sub-category">
                  <div className="portfolio-desc-sub-category-img">
                    <img
                      src={`${categoryIcon[el.category]}`}
                      alt="portfolio-category-img"
                    />
                  </div>
                  <p className="portfolio-desc-category">{el.category}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
