import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";

const EntryPage = () => {
  const history = useNavigate();

  return (
    <section id="entry-page">
      <div className="grid-nav-box">
        <Navigation />
      </div>

      <form>
        <h2>Reset Password</h2>
        <fieldset>
          <legend>Password Reset</legend>
          <ul>
            <li>
              <em>A reset link will be sent to your inbox!</em>
            </li>
            <li>
              <label for="email">Email:</label>
              <input type="email" id="email" required />
            </li>
          </ul>
        </fieldset>
        <button>Send Reset Link</button>
        <button type="button" onClick={() => history("/forget-passoword")}>
          Go Back
        </button>
      </form>
    </section>
  );
};

export default EntryPage;
