import React from "react";
import "./navbar.styles.css";
import { Link } from "react-router-dom";

function NavbarLink(props) {
  return (
    <div class="ml-3 mr-3">
      <a href={props.path} class="a-custom">
        {props.children}
      </a>
    </div>
  );
}

function NavbarTemplate(props) {
  const links = props.links;
  const linksList = links.map((link) => (
    <NavbarLink path={link.path}>{link.text}</NavbarLink>
  ));
  return (
    <nav class="navbar navbar-expand-sm fixed-top navbar-custom">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <NavbarLink path="/">HOME</NavbarLink>
          {linksList}
        </ul>
      </div>
    </nav>
  );
}

function Navbar(props) {
  return props.isLoggedIn ? privateNavbar : publicNavbar;
}

const publicNavbar = (
  <NavbarTemplate
    links={[
      { text: "LOGIN", path: "/login" },
      { text: "REGISTER", path: "/register" },
    ]}
  ></NavbarTemplate>
);

const privateNavbar = (
  <NavbarTemplate
    links={[
      { text: "BOOK", path: "/book" },
      { text: "MANAGE", path: "/manage" },
      { text: "LOGOUT", path: "/logout" },
    ]}
  ></NavbarTemplate>
); //TODO design a private navbar and possibly have it split into tutor and student

export default Navbar;
