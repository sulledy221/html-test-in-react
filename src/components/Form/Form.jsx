import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div className="form-wrapper">
      <h2 className="headers">REQUEST AN APPOINTMENT</h2>
      <br />
      <p>
        Enim in ut velit excepteur irure anim sint fugiat reprehenderit. Laboris
        quis pariatur irure excepteur excepteur deserunt cupidatat ea Lorem
        nostrud minim.
      </p>
      <br />
      <form className="form">
        <input className="name" type="text" placeholder="NAME" />
        <input className="email" type="text" placeholder="EMAIL" />
        <input className="phone" type="text" placeholder="PHONE" />
        <textarea className="comments" placeholder="COMMENTS" rows="3" />
      </form>
      <button className="form-btn">CONTACT US</button>
    </div>
  );
}
