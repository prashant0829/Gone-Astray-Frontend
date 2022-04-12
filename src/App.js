import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UploadImage from "./pages/UploadImage";
import Home from "./pages/Home";
import "./App.css";
import Check from "./pages/Check";
import ComplainRegistration from "./pages/complainRegistration/ComplainRegistration";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          {/* <Route
            path="/login"
            element={
              !isLoggedIn ? (
                <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/" />
              )
            }></Route>
          <Route
            path="/register"
            element={
              !isLoggedIn ? (
                <Register
                  isLoggedIn={isLoggedIn}
                  setIsLoggedIn={setIsLoggedIn}
                />
              ) : (
                <Navigate to="/" />
              )
            }></Route>
          <Route
            exact
            path="/check"
            element={
              isLoggedIn ? (
                <Check isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/login" />
              )
            }></Route>
          <Route
            exact
            path="/"
            element={
              isLoggedIn ? (
                <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <Navigate to="/login" />
              )
            }></Route>

          <Route path="/upload-image" element={<UploadImage />}></Route> */}
          <Route
            path="/"
            element={
              <Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }></Route>
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }></Route>
          <Route
            path="/register"
            element={
              <Register isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }></Route>
          <Route
            path="/check"
            element={
              <Check isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }></Route>
          <Route
            path="/register/complain"
            element={
              <ComplainRegistration
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
              />
            }></Route>
        </Routes>
      </div>
    </Router>
  );
}
