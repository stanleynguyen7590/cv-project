import React from "react";
import "../css/header.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Header = props => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Link className="navbar-brand" to="/">
        <i className="fas fa-edit"></i>CV Editor
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse transition="false" id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink className="nav-item nav-link" to="/personal-info">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/working-experience">
            Working Exprerience
          </NavLink>
          <NavLink className="nav-item nav-link" to="/education">
            Education
          </NavLink>
          <NavLink className="nav-item nav-link" to="/skills">
            Skills
          </NavLink>
          <NavLink className="nav-item nav-link" to="/honours-awards">
            Honours & Awards
          </NavLink>
          <Link className="nav-item nav-link" to="/certificate">
            Certificates
          </Link>
          <NavLink className="nav-item nav-link" to="/preview">
            Preview
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
