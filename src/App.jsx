import React from "react";
import Home from "./Pages/Home";
import OurProfile from "./Pages/OurProfile";
import SignUp from "./components/SignUp/Signup.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
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
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
