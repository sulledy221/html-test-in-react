import React from "react";
import "./banner.css";

export default function Banner() {
  return (
    <div className="banner-container">
      <img className="banner" src="images/banner-image.jpg" alt="" />
      <img className="banner-top-img" src="images/banner-text-bg.png" alt="" />
      <div className="banner-box">
        <h1 className="banner-text headers">SERVICE NAME</h1>
        <p className="banner-text-p">
          Occaecat et enim non veniam nostrud aliqua reprehenderit ad ad
          pariatur consequat ut. Nulla proident magna adipisicing voluptate in
          ex in enim.
        </p>
        <button className="banner-btn headers">LEARN MORE</button>
      </div>
    </div>
  );
}
