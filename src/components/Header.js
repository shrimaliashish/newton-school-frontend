import React from "react";
import "../assets/css/Navbar.css";
import { BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import logo from "../assets/img/logo.png";
// import { useNavigate } from "react-router-dom";

const Header = () => {
  //   const navigate = useNavigate();

  //   const gotoHome = () => {
  //     navigate("/feed");
  //   };

  //   const userload = useSelector((state) => state.user);
  const gotoHome = () => {};

  return (
    <div className="nav_main">
      <div className="nav_left">
        <img src={logo} alt="SHARK TANK" height="100%" onClick={gotoHome} />
      </div>
      <div className="Heading">
        <h2>Newton School Assignment Implementation</h2>
      </div>
      <div className="nav_middle">
        <div className="nav_mid_child nav_twitter">
          <a
            href="/"
            rel="noreferrer"
            
          >
            <BsTwitter />
          </a>
        </div>
        <div className="nav_mid_child nav_facebook">
          <a
            href="/"
            rel="noreferrer"
            
          >
            <BsFacebook />
          </a>
        </div>
        <div className="nav_mid_child nav_insta">
          <a
            href="/"
            rel="noreferrer"
            
          >
            <BsInstagram />
          </a>
        </div>
      </div>

      {/* <div className="nav_right">
        {!userload.loading && <p>Hi, {userload.users.name} </p>}
      </div> */}
    </div>
  );
};

export default Header;
