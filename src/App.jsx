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
import School from "./components/School/School.jsx"; // Import the School component
import NewUser from "./components/NewUser/NewUser.jsx";

const App = () => {
  const location = useLocation();

  // List of routes where the Navbar should not be displayed
  const noNavbarRoutes = ["/student", "/school", "/signup", "/newuser"]; // Add "/school" to the list

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
          <Route exact path="/School">
            <School /> {/* Add the route for the School page */}
          </Route>
          <Route exact path="/NewUser">
            <NewUser />
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
