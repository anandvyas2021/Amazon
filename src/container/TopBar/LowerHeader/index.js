import React from "react";
import "../../../styles/container/LowerHeader.scss";

import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";

const LowerHeader = () => {
  return (
    <div className="lower-header-container">
      <div className="lower-header">
        <div className="lower-menu-container">
          <div className="lower-menu">
            <div className="lower-menu-icon">
              <MenuOutlinedIcon />
            </div>
            <div className="lower-menu-text"></div>
          </div>
        </div>
        <div className="lower-navigation-container"></div>
        <div className="lower-prime-container"></div>
      </div>
    </div>
  );
};

export { LowerHeader };
