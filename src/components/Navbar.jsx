import * as React from "react";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Navbar.css"; // import the CSS file

const Navbarpage = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              className={activeLink === "Home" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#action2"
              className={activeLink === "Link" ? "active" : ""}
              onClick={handleLinkClick}
            >
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarpage;
