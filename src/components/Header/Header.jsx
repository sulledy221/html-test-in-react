import React from "react";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./header.css";

export default function Header() {
  return (
    <div>
      <div className="header-info">
        <img className="logo-img" src="images/logo.png" alt="" />
        <div>
          <h2 className="contact">
            CALL TODAY{" "}
            <a href="number" className="number">
              231-456-7890
            </a>
          </h2>
          <p className="p-contact">Serving Scottsdale, AZ</p>
        </div>
      </div>
      <Nav />
      <Banner />
    </div>
  );
}
