/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Button, Container, Form, NavLink } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import whole from "../utils/images/whole.png";
import { FiSearch } from "react-icons/fi";
import Login from "./Login";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="d-none d-md-block py-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <img src={whole} alt="" />
          </div>
          <div>
            <div>
              <div class="input-group">
                <div
                  class="input-group-append position-absolute  px-3 "
                  style={{ marginLeft: "7px", marginTop: "8px" }}
                >
                  <FiSearch />
                </div>
                <input
                  style={{ width: "433px" }}
                  class="  py-2 border-right-0 border px-5 rounded-pill "
                  type="search"
                  placeholder="Search your favorite groups in ATG"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <NavLink>
                {" "}
                <h6 onClick={handleShow}>
                  Create Account.{" "}
                  <span className="text-primary">It's free</span>
                </h6>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Login show={show} handleClose={handleClose} setUser={setUser} />

      <Navbar className="d-md-none d-block" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <div>
              <img src={whole} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <h6 onClick={handleShow}>
                  Create Account.{" "}
                  <span className="text-primary">It's free</span>
                </h6>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
