import React from "react";
import {
  BsFacebook,
  BsLinkedin,
  BsYoutube,
  BsTwitter,
  BsDribbble,
  BsInstagram,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const footerItems = [
  <BsFacebook />,
  <BsLinkedin />,
  <BsYoutube />,
  <BsTwitter />,
  <BsDribbble />,
  <BsInstagram />,
];

const Footer = () => {
  return (
    <footer className="text-center bg-gray-900 text-white">
      <div className="container px-6 pt-6 mx-auto">
        <div className="flex items-center justify-center">
          <Link to={"/"} type="button" className="">
            <div className="flex items-center justify-center text-center mb-3">
              {footerItems.map((footer, i) => (
                <span key={i} className="mx-6 text-center text-lg">
                  {footer}
                </span>
              ))}
            </div>
          </Link>
        </div>
      </div>

      <div
        className={"text-center p-4"}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright :
        <Link to="/" className="text-white">
          {"   "}
           Janto Pee
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
