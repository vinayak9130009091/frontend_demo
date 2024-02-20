import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./Contact.css";

function Contact({ handleContactClose }) {
  return (
    <div className="createContact">
      <div className="header_title">
        <button type="button" onClick={() => handleContactClose()}>
          <RxCross2 />
        </button>
        <div className="title col-4">Contact</div>
      </div>

      <div className="c-contact col-12">
        <div className="name-container">
          <label className="label">First Name:</label>
          <input className="col-12 input" type="text" placeholder="first name" />
        </div>
        <div className="name-container">
          <label className="label">Last Name:</label>
          <input className="col-12 input" type="text" placeholder="last name" />
        </div>
        <div className="name-container">
          <label className="label">Email:</label>
          <input className="col-12 input" type="email" placeholder="email" />
        </div>

        <button className="submit-btn col-6">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
