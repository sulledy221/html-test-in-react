import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-div">
        <img className="footer-img" src="images/logo-footer.png" alt="" />
        <div>
          <h4 className="sitemap">SITEMAP</h4>
          <div className="sitemap-div">
            <div>
              <p>HOME</p>
              <p>SERVICES</p>
              <p>CONTACT</p>
            </div>
            <div>
              <p>ABOUT</p>
              <p>REVIEWS</p>
            </div>
          </div>
        </div>
        <div>
          <h4 className="hours-div">HOURS</h4>
          <div className="hours-div">
            <div>
              <p>MON-FRI</p>
              <p>SATURDAY</p>
              <p>SUNDAY</p>
            </div>
            <div>
              <p>8:00 AM - 5:00 PM</p>
              <p>BY APPOINTMENT</p>
              <p>CLOSED</p>
            </div>
          </div>
        </div>
        <div className="location-div">
          <h4 className="location">OUR LOCATION</h4>
          <p>12345 N. PAPER ST.</p>
          <p>SCOTTSDALE, AZ 85257</p>
          <p>
            <b>PHONE: 231-456-7890</b>
          </p>
        </div>
      </div>
      <footer className="footer">
        &copy; 2015 COMPANY OF SCOTTSDALE | ALL RIGHTS RESERVED. | PRIVACY
        POLICY | SITEMAP
      </footer>
    </>
  );
}
