import { useState, useEffect } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post("/login", {
        email: email,
        password: password,
      });
      alert("User Successfully Logged in");
      setIsLoggedIn(true);
      localStorage.setItem("user", data.data.email);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <section id="entry-page">
      <div className="grid-nav-box">
        <Navigation isLoggedIn={isLoggedIn} />
      </div>
      <form onSubmit={login}>
        <h2>Welcome Back!</h2>
        <fieldset>
          <legend>Log In</legend>
          <ul>
            <li>
              <label for="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label for="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            {/* <li>
                  <i />
                  <a onClick={() => changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li> */}
          </ul>
        </fieldset>
        <button type="submit">Login</button>
        <button type="button" onClick={() => history("/register")}>
          Create an Account
        </button>
      </form>
    </section>
  );
};

export default Login;
