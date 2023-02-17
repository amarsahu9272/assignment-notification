import React from "react";
import "./Header.css";
import Logo from "../../Amr.jpg";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
function Header() {
  return (
    <div className="header">
      <div className="headerAvatar">
        <Link to="/App" className="link">
          <Avatar src={Logo} />
        </Link>
      </div>
      <div className="headerList">
        <Link to="/" className="link">
          <h3>Home</h3>
        </Link>
        <Link to="Notification" className="link">
          <h3>Notification</h3>
        </Link>
      </div>
    </div>
  );
}

export default Header;
