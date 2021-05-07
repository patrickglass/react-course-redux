import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "red" };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Coursy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" activeStyle={activeStyle} className="nav-link">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/courses"
              activeStyle={activeStyle}
              className="nav-link"
            >
              Courses
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/about" activeStyle={activeStyle} className="nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
