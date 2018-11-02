import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-1">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {this.props.branding}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact/add" className="nav-link">
                  <i className="fas fa-plus" /> Add
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  <i className="fas fa-question" /> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
