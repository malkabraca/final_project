import React, { useEffect, useState } from "react";
import "../css/navbar&foter.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ROUTES from "../routes/ROUTES";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import SearchPartial from "./SearchPartial";
import { Link } from "react-router-dom";
import ImageNavbar from "./ImageNavbar";

const Navbars = () => {
  const [activeLink, setActiveLink] = useState("");
  const isLoggedIn = useSelector(
    (bigPieBigState) => bigPieBigState.authSlice.isLoggedIn
  );
  const payload = useSelector((bigPie) => bigPie.authSlice.payload);
  const dispatch = useDispatch();

  const logoutClick = () => {
    localStorage.clear();
    dispatch(authActions.logout());
  };

  const handleLinkClick = (event) => {
    setActiveLink(event.target.innerText);
  };

  return (
    <Navbar className="navbar" expand="lg">
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
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </Nav>

            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.ABOUT}
                onClick={handleLinkClick}
              >
                About
              </Link>
            </Nav>
            <Nav className={"navLink"}>
              <Link
                id="nav"
                to={ROUTES.CONTACT}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </Nav>
            {!isLoggedIn ? (
              <Nav className={"navLink"}>
                <Link
                  id="nav"
                  to={ROUTES.MENULOGUT}
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
                  to={ROUTES.MENULOGUT}
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
          {isLoggedIn ? (
            <ImageNavbar />
          ) : (
            ""
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
