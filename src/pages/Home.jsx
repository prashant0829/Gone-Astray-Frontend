import { useEffect, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";
import UploadImage from "../pages/UploadImage";
import { Container } from "react-bootstrap";

const Home = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();

  return (
    <>
      <section id="entry-page" style={{ maxHeight: "400px" }}>
        <div className="grid-nav-box">
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </div>
        <div className="home-container">
          <h1>Welcome to Unearthing The Gone Astray</h1>
        </div>
      </section>

      <Container className="pt-2 pb-2">
        <UploadImage />
      </Container>
    </>
  );
};

export default Home;
