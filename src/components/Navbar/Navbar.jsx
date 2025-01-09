import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
    setActiveSubmenu(null); // Close any open submenu when switching dropdowns
  };

  const handleSubmenuToggle = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isDropdownClick =
        event.target.closest(".dropdown") || event.target.closest(".NavLogo");
      if (!isDropdownClick) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="Navbar">
      {/* Logo Section */}
      <div className="NavLogo">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Navigation Items */}
      <div className="NavItems">
        <ul>
          {/* About Us */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("about-us")}>
              About Us ▼
            </button>
            {activeDropdown === "about-us" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Our Profile</a>
                </li>
                <li className="dropdown">
                  <button onClick={() => handleSubmenuToggle("blog")}>
                    Blog ▶
                  </button>
                  {activeSubmenu === "blog" && (
                    <ul className="submenu">
                      <li>
                        <a href="#ImpactSection">Impact Stories</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="#">Educational Insights</a>
                      </li>
                      <li>
                        <a href="#">Newsletter</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            )}
          </li>

          {/* Donate */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("donate")}>
              Donate ▼
            </button>
            {activeDropdown === "donate" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Donate Resources</a>
                </li>
                <li>
                  <a href="#">Donate Funds</a>
                </li>
              </ul>
            )}
          </li>

          {/* Request */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("request")}>
              Request ▼
            </button>
            {activeDropdown === "request" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Request as Student</a>
                </li>
                <li>
                  <a href="#">Request as School</a>
                </li>
              </ul>
            )}
          </li>

          {/* Volunteer */}
          <div className="NavOthers">
            <li>
              <a href="#">Volunteer</a>
            </li>
          </div>

          {/* Get Involved */}
          <li className="dropdown">
            <button onClick={() => handleDropdownToggle("get-involved")}>
              Get Involved ▼
            </button>
            {activeDropdown === "get-involved" && (
              <ul className="dropdown-menu">
                <li>
                  <a href="#">Partner with Us</a>
                </li>
                <li>
                  <a href="#">Sponsor an Event</a>
                </li>
              </ul>
            )}
          </li>

          {/* E-Library */}
          <div className="NavOthers">
            <li>
              <a href="#">E-Library</a>
            </li>
          </div>

          {/* Contact Us */}
          <div className="NavOthers">
            <li>
              <a href="#">Contact Us</a>
            </li>
          </div>
        </ul>
      </div>

      {/* Buttons for Sign Up and Log In */}
      <div className="NavButtons">
        <button className="log-in">Log In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
