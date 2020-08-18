import React from "react";
import "./navbar.styles.css";

// Just the text of the Navbar Links
// If style included it replaces with that instead of the default
function NavbarLink(props) {
  const link = props.link;
  return (
    <div className={link.styling ? link.styling : "ml-3 mr-3"}>
      <a href={link.path} className="a-custom">
        {link.text}
      </a>
    </div>
  );
}

// Takes a list of objects and converts them into a formatted navigation bar
function NavbarTemplate(props) {
  const links = props.links;
  const leftLinksList = links.map((link) =>
    link.right ? null : <NavbarLink link={link}></NavbarLink>
  );
  const rightLinksList = links.map((link) =>
    !link.right ? null : <NavbarLink link={link}></NavbarLink>
  );
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-custom">
      <div className="container-fluid">
        <ul className="nav navbar-nav">{leftLinksList}</ul>
        <ul class="nav navbar-nav navbar-right">{rightLinksList}</ul>
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
      { text: "HOME", path: "/", styling: "mr-3" },
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
      { text: "LOGOUT", path: "/logout", right: true },
    ]}
  ></NavbarTemplate>
); //TODO design a private navbar and possibly have it split into tutor and student

export default Navbar;
