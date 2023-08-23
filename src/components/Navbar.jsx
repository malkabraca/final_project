import React, { useState } from "react";
import { Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import "../css/navbar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import ROUTES from "../routes/ROUTES";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { darkThemeActions } from "../store/darkTheme";
import { authActions } from "../store/auth";
import SearchPartial from "./SearchPartial";
import { Link } from "react-router-dom";

const Navbars = () => {
  const [activeLink, setActiveLink] = useState("");
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const dispatch = useDispatch();


  const changeTheme = () => {
    dispatch(darkThemeActions.changeTheme());
  };

  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg" /* className="bg-body-tertiary" */>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.HOME}
                // className={activeLink === "Home" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </Nav>

            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.ABOUT}
                // className={activeLink === "Home" ? "active" : ""}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </Nav>

            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MENULOGUT}
                  // className={activeLink === "Home" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  General-Menu
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MENU}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Menu
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MYORDER}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  My Order
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.LOGOUT}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={logoutClick}
                >
                  Logout
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.LOGIN}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Login
                </Link>
              </Nav>
            ) : (
              ""
            )}
            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.REGISTER}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  Register
                </Link>
              </Nav>
            ) : (
              ""
            )}

            {isLoggedIn && payload.isAdmin ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.CRM}
                  // className={activeLink === "Link" ? "active" : ""}
                  onClick={handleLinkClick}
                >
                  CRM
                </Link>
              </Nav>
            ) : (
              ""
            )}
          </Nav>
            <SearchPartial />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
