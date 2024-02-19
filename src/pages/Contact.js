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
        <div className="company-contact col-12">
          <div className="name-container">
            <label>First Name:</label>
            <input className="col-12" type="text" placeholder="first name" />
          </div>
          <div className="name-container">
            <label>Last Name:</label>
            <input className="col-12" type="text" placeholder="last name" />
          </div>
          <div className="name-container">
            <label>Email:</label>
            <input className="col-12" type="email" placeholder="email" />
          </div>
          <div className="tag"></div>
          <button className="submit-btn col-6">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
