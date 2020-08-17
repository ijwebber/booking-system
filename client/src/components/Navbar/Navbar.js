import React from "react";
import "./navbar.styles.css";

// Just the text of the Navbar Links
// If style included it replaces with that instead of the default
// Used for Home
// TODO check if this works for moving the link to the right for logout
function NavbarLink(props) {
  return (
    <div className={props.style ? props.style : "ml-3 mr-3"}>
      <a href={props.path} className="a-custom">
        {props.children}
      </a>
    </div>
  );
}

// Takes a list of objects and converts them into a formatted navigation bar
function NavbarTemplate(props) {
  const links = props.links;
  const linksList = links.map((link) => (
    <NavbarLink path={link.path}>{link.text}</NavbarLink>
  ));
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-custom">
      <div className="container-fluid">
        <ul className="nav navbar-nav">
          <NavbarLink path="/" style="mr-3">
            HOME
          </NavbarLink>
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
