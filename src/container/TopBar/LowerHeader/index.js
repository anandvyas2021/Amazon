import React from "react";
import "./LowerHeader.scss";

import PrimeImg from "../../../assets/prime image.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const navigationItems = [
  { key: 0, name: "Fresh", link: "/fresh" },
  { key: 1, name: "Amazon Pay", link: "/amazon-pay" },
  { key: 2, name: "Gift Cards", link: "/gift-cards" },
  { key: 3, name: "Buy Again", link: "/buy-again" },
  { key: 4, name: "Gift Ideas", link: "/gift-ideas" },
  { key: 5, name: "Health,Household & Personal Care", link: "/personal-care" },
  { key: 6, name: "Home Improvement", link: "/home-improvement" },
  { key: 7, name: "Kindle eBooks", link: "/kindle-ebooks" },
  { key: 8, name: "AmazonBasics", link: "/amazon-basics" },
];
const LowerHeader = () => {
  return (
    <div className="lower-header-container">
      <div className="lower-header">
        <div className="lower-menu-container">
          <div className="lower-menu box">
            <div className="lower-menu-icon">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="lower-menu-text">All</div>
          </div>
        </div>
        <div className="lower-navigation-container">
          <div className="lower-navigation">
            {navigationItems.map((item) => (
              <div className="lower-navigation-item box" key={item.key}>
                <Link className="lower-navigation-link" to={item.link}>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="lower-prime-container">
          <div className="lower-prime box">
            <img src={PrimeImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LowerHeader };
