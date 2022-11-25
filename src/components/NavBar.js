/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import whole from "../utils/images/whole.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="flex justify-content-">
        <Navbar.Brand href="#">
          <img height="40px" width="200px" src={whole} alt="" />
        </Navbar.Brand>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="action">Action</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Toggle aria-controls="navbarScroll" />
    </Navbar>
  );
};

export default NavBar;
