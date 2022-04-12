import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./container/App";

const NextApp = () => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  );
};

export default NextApp;
