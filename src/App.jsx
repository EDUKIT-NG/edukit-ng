import React from "react";
import Home from "./Pages/Home";
import OurProfile from "./Pages/OurProfile";
import SignUp from "./components/SignUp/Signup.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Student from "./components/Student/Student.jsx";
// import Profile from "./Pages/Profile";

const App = () => {
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ["/student"];

  return (
    <div className="">
      {/* Conditionally render Navbar */}
      {!noNavbarRoutes.includes(location.pathname.toLowerCase()) && <Navbar />}
      <div className="contents">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/OurProfile">
            <OurProfile />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Student">
            <Student />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
