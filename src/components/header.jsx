import React from "react";
import "../css/header.css";
import { Navbar } from "react-bootstrap";
const Header = props => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>CV Application</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
