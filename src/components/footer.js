import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaGoogle,
  FaPinterest,
  FaWifi,
} from "react-icons/fa";
import logo from "../images/logo.png";

const Footer = ({navigateToAbout2}) => {
  return (
    <footer className="bg-customSkin text-white p-4">
      {/* Top  line */}
      <div className="w-5/6 h-1 bg-customBrown mx-auto mt-12"></div>

      <div className="container mx-auto py-16">
        <div className="flex justify-around items-center">
          {/* Logo */}
          <div className="text-lg font-bold ">
           <button onClick={navigateToAbout2}> <img src={logo} alt="logoimage"></img> </button>
          </div>

          {/* Address and Phone Numbers */}
          <div className="text-right">
            <div style={{ display: "flex", alignItems: "center" }}>
              <FontAwesomeIcon
                className="text-customBrown"
                icon={faMapMarkerAlt}
                style={{ marginRight: "8px" }}
              />
              <p className="text-black">
                ABC Company, 123 East, 17th Street, Ab Vd 100101
              </p>
            </div>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="mt-5"
            >
              <FontAwesomeIcon
                className="text-customBrown "
                icon={faPhone}
                style={{ marginRight: "8px" }}
              />
              <p className="text-black">Mobile: (123) 456-7890</p>
              <FontAwesomeIcon
                className="text-customBrown mx-10"
                icon={faPrint}
                style={{ marginRight: "8px" }}
              />
              <p className="text-black">Phone: (123) 456-4321</p>
            </div>
            <div className="flex justify-center space-x-4 mt-7">
              <h4 className="text-gray-500">Social Media</h4>
              <FaFacebookF className="text-customBrown" />
              <FaTwitter className="text-customBrown" />
              <FaLinkedinIn className="text-customBrown" />
              <FaYoutube className="text-customBrown" />
              <FaInstagram className="text-customBrown" />
              <FaGoogle className="text-customBrown" />
              <FaPinterest className="text-customBrown" />
              <FaWifi className="text-customBrown" />
            </div>
          </div>
        </div>

        {/* Bottom red line */}
        <div className="w-5/6 h-px bg-gray-400 my-6"></div>

        <div className="flex justify-between items-center pl-20">
          {/* Links */}
          <div className="flex space-x-4">
            <button className="text-black font-semibold text-sm">
              ABOUT US
            </button>
            <button className="text-black font-semibold text-sm">
              CONTACT US
            </button>
            <button className="text-black font-semibold text-sm">
              HELP
            </button>
            <button className="text-black font-semibold text-sm">
              PRIVACY POLICY
            </button>
            <button  className="text-black font-semibold text-sm">
              DISCLAIMER
            </button>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-gray-500 text-sm pr-44 ">
              Copyright &copy; 2022 Biginit Company
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
