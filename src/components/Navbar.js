import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import { Link } from "react-router-dom";
import "../Styling/Navbar.css"

// Navbar component defined as a functional component
export default function Navbar(props) {
  return (
    <>
      {/* Navbar structure using Bootstrap classes */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          {/* Display the title passed as a prop */}
          <Link className="navbar-brand textflow-brand" to="/">
            {props.title}
          </Link>
          {/* Toggler button for mobile view */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Collapsible section containing links and search bar */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutTitle}
                </Link>
              </li>
            </ul>
            {/* Search form
                        <form className="d-flex" role="search">
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Search" 
                                aria-label="Search" 
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.toggleMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Prop validation to ensure the correct types and requirements for props
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // Title must be a string and is required
  aboutTitle: PropTypes.string.isRequired, // AboutTitle must be a string and is required
};
// Here we are using the PropTypes library to define the type of the props that we are passing to the Navbar component.
// This will help us to debug the application easily.
// If the type of the props is not as expected, then it will throw an error in the console. ( as we have set the isRequired property to true)

// Default values for props if they are not passed by the parent component
Navbar.defaultProps = {
  title: "TextFlow", // Default title if no title prop is provided
  aboutTitle: "About", // Default aboutTitle if no aboutTitle prop is provided
};
// Here we are using the defaultProps property to set the default values of the props that we are passing to the Navbar component.
// This will help us to avoid any errors if the props are not passed to the Navbar component.
