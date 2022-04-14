import React from "react";
import "./index.scss";
import { UpperHeader } from "./UpperHeader";
import { LowerHeader } from "./LowerHeader";

const TopBar = () => {
  return (
    <header className="header">
      <UpperHeader />
      {/* <LowerHeader /> */}
    </header>
  );
};

export default TopBar;
