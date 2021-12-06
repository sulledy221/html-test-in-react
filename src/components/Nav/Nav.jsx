import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="container">
      <nav>
        <ul>
          <BrowserRouter>
            <li>
              <Link to="#">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#services">Services</Link>
            </li>
            <li>
              <Link to="#reviews">Reviews</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </BrowserRouter>
        </ul>
      </nav>
    </div>
  );
}
