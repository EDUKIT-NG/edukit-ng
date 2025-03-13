import React from "react";
import Home from "./Pages/Home";
import OurProfile from "./Pages/OurProfile";
import Signup from "./components/Signup/Signup.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Student from "./components/Student/Student.jsx";
// import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <div className="contents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/OurProfile">
              <OurProfile />
            </Route>
            <Route exact path="/Signup">
              <Signup />
            </Route>
            <Route exact path="/Student">
              <Student />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
