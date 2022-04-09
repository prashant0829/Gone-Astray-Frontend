import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <nav>
        <Container>
          <ul>
            {isLoggedIn && (
              <li>
                <Link to="/">Home</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <Link to="/check">Check</Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {!isLoggedIn && (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
            {isLoggedIn && (
              <li>
                <a
                  onClick={() => {
                    setIsLoggedIn(false);
                    localStorage.removeItem("user");
                  }}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </Container>
      </nav>
    </>
  );
};

export default Navigation;
