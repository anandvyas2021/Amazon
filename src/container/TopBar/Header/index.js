import React from "react";
import "../../../styles/container/Header.scss";
import logo from "../../../assets/amazon.png";

import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-left-section">
          <div className="header logo">
            <a href="/">
              <img src={logo} alt="amazon" width="110px" />
            </a>
          </div>
        </div>
        <div className="header-search-section"></div>
        <div className="header-right-section"></div>
      </div>
    </div>
  );
};

export default Header;
