import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import axios from "axios";

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const data = await axios.post("/register", {
        email: email,
        password: password,
      });
      alert("User Successfully Created");
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

      <form onSubmit={register}>
        <h2>Sign Up!</h2>
        <fieldset>
          <legend>Create Account</legend>
          <ul>
            <li>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input
                type="password"
                id="confirm-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => history("/login")}>
          Have an Account?
        </button>
      </form>
    </section>
  );
};

export default Register;
