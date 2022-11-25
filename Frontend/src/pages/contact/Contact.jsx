import React from "react";
import "./contact.css";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faUser,
  faInstagram,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container3">
        <div className="container4">
          <div>
            <img src="./contact.jpg" className="img-contact" alt="Contact Us" />
          </div>

          <div className="container5">
            <div>
              <span className="con-spam">Contact</span> <br />
              <br />
              <br />
              <form className="con-form" action="">
                {" "}
                <br />
                <label className="con-text"> Name </label> <br />
                <br />
                <input type="text" className="con-input" />
                <br />
                <br />
                <label className="con-text">E-mail</label> <br />
                <br />
                <input type="text" className="con-input" /> <br />
                <br />
                <label className="con-text">Message</label> <br />
                <br />
                <input type="text" className="con-input" /> <br /> <br />
                <br />
                <button className="con-btn"> SUBMIT</button>
              </form>
            </div>
            <div>
              <div className="con-text1">
                NOMADIC STAY family, provides best hotels at very reasonable
                price perfect for your destination.Our motive is to be able to
                provide our customers best lifetime experience with there loved
                ones. <br />
                🖤🖤 <br /> <br />
                <br />
                <p className="con-time">
                  Visit Us
                  <br />
                  Monday - Saturday <br />
                  10:00 a.m - 6:00 p.m
                  <br />
                  109-298-387 <br />
                  456-567-678
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 