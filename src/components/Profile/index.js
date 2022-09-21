import React from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import logo from "../../images/logo.png";

import "./styles.scss";

const Profile = () => {
  return (
    <div className="Profile">
      <div className="image">
        <img src={logo} alt="Avatar" />
      </div>
      <div className="description">Online Riddle Master</div>
      <div className="btn-about">
        <Link to="/about">
          <Button type="button" class="btn btn-success" >ABOUT</Button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
