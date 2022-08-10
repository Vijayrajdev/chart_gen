import React from "react";
import Logo from "../Data/logo.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 md:px-6 md:py-4 bg-transparent">
      <a href="/">
        <img width="50px" src={Logo} alt="mainlogo" />
      </a>
      <a href="https://vijayraj.netlify.app" target="blank">
        <button className="border text-xs md:text-base px-4 py-2 rounded text-white hover:bg-blue-100 hover:text-black">
          Contact me
        </button>
      </a>
    </div>
  );
};

export default Header;
