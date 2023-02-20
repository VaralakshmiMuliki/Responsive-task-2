import React from "react";
import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrSearch } from "react-icons/gr";

export const Header = () => {
  const menus = ["Home", "Services", "News", "Contact"];
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      className="m-auto"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/03/logo-copy-4.png"
            className="jevelin-logo "
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ham" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-menus">
            {menus.map((menu) => (
              <Nav.Link href="#pricing">{menu}</Nav.Link>
            ))}
           
            <Nav.Link href="#pricing">
              <GrSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
