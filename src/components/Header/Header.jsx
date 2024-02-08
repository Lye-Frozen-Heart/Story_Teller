import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar {...args} className="navbar bg-light fixed-top">
        <NavbarBrand href="/" className="text-dark">
          <FontAwesomeIcon icon={["fal"]}></FontAwesomeIcon>
        </NavbarBrand>
        <NavbarBrand href="/user" className="">
          <i className="fa"></i>
        </NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;
