import React from "react";
import MainApp from "./MainApp";
import {
  Routes,
  Route,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";

// const RestrictedRoute = ({ component: Component, phone, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) => (phone ? <Component {...props} /> : history.push())}
//   ></Route>
// );

const App = () => {
  // const location = useLocation();
  // const history = useHistory();
  let phone = 7888478435;
  return (
    <MainApp />
    // <Routes>
    //    <Route exact path="/signin" element={} />
    //    <RestrictedRoute
    //     path="/"
    //     phone={phone}
    //     location={location}
    //     component={MainApp}
    //   // />
    //  </Routes>
  );
};

export default App;
