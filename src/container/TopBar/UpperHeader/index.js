import React, { useState } from "react";
import "./UpperHeader.scss";

import logo from "../../../assets/amazon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMagnifyingGlass,
  faCaretDown,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { Search } from "../../../custom/Header/Search";

const UpperHeader = () => {
  const [login, setlogin] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);
  let user = {
    firstName: "anand",
    lastName: "vyas",
    address: "Ahmedabad 382424",
  };
  return (
    <div className="upper-header-container">
      <div className="upper-header">
        <div className="upper-header-left-section">
          <div className="upper-header-menu-icon">
            <FontAwesomeIcon icon={faBars} className="upper-location-icon" />
          </div>
          <div className="upper-header-logo-container box">
            <div className="upper-header-logo">
              <a href="/">
                <img src={logo} alt="amazon" className="upper-image" />
              </a>
              <span className="upper-extension">.ug</span>
            </div>
          </div>
          <div className="upper-header-address-container box">
            <div className="upper-header-address">
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="upper-location-icon"
                />
              </div>
              <div className="upper-address-text">
                <span className="first-line">
                  {login ? `Deliver to ${user.firstName}` : "Hello"}
                </span>
                <span className="second-line">
                  {login ? ` ${user.address}` : "Select your address"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="upper-header-search-section">
          <div className="upper-search-container">
            <div className="upper-search-categories-container">
              <Search />
            </div>
            <div className="upper-search-bar-container">
              <input className="upper-search" />
            </div>
            <div className="upper-search-btn-container">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="upper-search-icon"
              />
            </div>
          </div>
        </div>

        <div className="upper-header-right-section">
          <div className="upper-header-language-container box">
            <div className="upper-header-language"></div>
          </div>

          <div className="upper-header-account-container box">
            <div className="upper-header-account">
              <div className="upper-account-text">
                <span className="first-line">
                  {login ? `Hello ${user.firstName}` : "Hello,Sign in"}
                </span>
                <span className="second-line">{"Account & Lists"}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="upper-dropdown-icon"
                />
              </div>
            </div>
          </div>

          <div className="upper-header-orders-container box">
            <div className="upper-header-orders">
              <div className="upper-orders-text">
                <span className="first-line">{"Returns"}</span>
                <span className="second-line">{"& Orders"} </span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCaretDown}
                  className="upper-dropdown-icon"
                />
              </div>
            </div>
          </div>

          <div className="upper-header-cart-container box">
            <div className="upper-header-cart">
              <div className="upper-header-cart-basket">
                <div>{itemsCount}</div>
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="upper-cart-icon"
                />
              </div>
              <div className="upper-cart-text">Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { UpperHeader };
