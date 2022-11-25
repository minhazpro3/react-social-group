import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import team from "../utils/images/Group 3.png";

const Login = ({ show, handleClose, setUser }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <p className="px-2 bg-success text-success font-bold  bg-opacity-25 py-2">
            Let's learn share and inspire each other with our passion for
            computer engineering. Sign up now
          </p>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-4">
              <form>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                </div>
              </form>
            </div>
            <div className="col-md-4">
              <img src={team} alt="" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
