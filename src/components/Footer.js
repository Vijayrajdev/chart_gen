import React from "react";
import Logo from "../Data/logo.svg";

const Footer = () => {
  return (
    <div>
      <footer className="p-4 bg-transparent rounded-lg shadow md:px-6 md:py-8 font-cinzel">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0">
            <img src={Logo} className="mr-3 w-[50px]" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-white">
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-white sm:mx-auto lg:my-8" />
        <span className="block text-sm text-white sm:text-center">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
