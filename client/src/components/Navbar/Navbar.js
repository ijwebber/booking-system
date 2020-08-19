import React, { Component } from "react";
import "./navbar.styles.css";
import LogoutLink from "./LogoutLink";

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
    link.right ? null : <NavbarLink key={link.text} link={link}></NavbarLink>
  );
  const rightLinksList = links.map((link) =>
    !link.right ? null : <NavbarLink key={link.text} link={link}></NavbarLink>
  );
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-custom">
      <div className="container-fluid">
        <ul className="nav navbar-nav">{leftLinksList}</ul>
        <ul className="nav navbar-nav navbar-right">
          {rightLinksList}
          {props.showLogout ? <LogoutLink onLogout={props.onLogout} /> : null}
        </ul>
      </div>
    </nav>
  );
}

export default class Navbar extends Component {
  getPublicNavbar() {
    return (
      <NavbarTemplate
        links={[
          { text: "HOME", path: "/", styling: "mr-3" },
          { text: "LOGIN", path: "/login" },
          { text: "REGISTER", path: "/register" },
        ]}
      ></NavbarTemplate>
    );
  }

  getStudentNavbar() {
    return (
      <NavbarTemplate
        links={[
          { text: "HOME", path: "/", styling: "mr-3" },
          { text: "BOOK", path: "/book" },
          { text: "MANAGE", path: "/manage" },
        ]}
        showLogout={true}
        onLogout={this.props.onLogout}
      ></NavbarTemplate>
    );
  }

  render() {
    return this.props.login ? this.getStudentNavbar() : this.getPublicNavbar();
  }
}
