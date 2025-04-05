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

import NewUser from "./components/NewUser/NewUser.jsx";
import School from "./components/School/School.jsx";
import Login from "./components/Login/Login.jsx"; // Import the Login component
import OurStory from "./Pages/OurStory.jsx";
import OurTeam from "./components/OurTeam/OurTeam"; // Update the import path

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
          <Route exact path="/OurStory">
            <OurStory />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Student">
            <Student />
          </Route>
          <Route exact path="/School">
            <School />
          </Route>
          <Route exact path="/Login">
            <Login /> {/* Add the route for the Login page */}
          </Route>
          <Route exact path="/NewUser">
            <NewUser />
          </Route>
          <Route exact path="/OurTeam">
            <OurTeam />
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
