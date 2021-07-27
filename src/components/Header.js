import React, { useState } from "react";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import { storage, db, auth, provider } from "../firebase";

function Header() {
  // const [user, setUser] = useState("");
  // const handleLogin = () => {
  //   if (!user) {
  //     auth.signInWithPopup(provider).then((result) => {
  //       setUser(result.user);
  //     });
  //   }
  // };
  
  return (
    <div>
      <nav className="header">
        <div className="header-container">
          <div className="header-elem">
            {/* <Home /> */}
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="header-elem">
            {/* <About /> */}
            <Link className="link" to="/about">
              About
            </Link>
          </div>
          <div className="header-elem">
            {/* <Profile /> */}
            <Link className="link" to="/profile">
              Profile
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
