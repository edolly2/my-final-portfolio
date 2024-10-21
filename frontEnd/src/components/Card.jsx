/* eslint-disable react/prop-types */
import "../styles/Card.css";
import { NavLink } from "react-router-dom";
import Headshot from "../assets/me-headshot.png";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import Button from "./Button";

// TODO:const Card = (props) => {
const Card = () => {
  return (
    // TODO:<div className={props.className}>
    <div className="card-container">
      <img
        className="card-img"
        src={Headshot}
        alt="Full Stack Developer, Eric Dollinger"
      />
      {/* TODO:<Line /> */}
      <div className="social-container">
        <a href="https://github.com/edolly2">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/eric-dollinger/">
          <FaLinkedinIn className="icon" />
        </a>
        <a href="https://facebook.com/dev.dollinger/">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01">
          <FaTwitter className="icon" />
        </a>
      </div>
      <div className="btn-group">
        <NavLink to="/about">
          <Button text="EXPLORE" />
        </NavLink>
        <NavLink to="/contact">
          <Button text="CONTACT" />
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
