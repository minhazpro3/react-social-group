import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import image from "../utils/images/codding.jpg";
import share from "../utils/images/Vector.png";
import profile from "../utils/images/Rectangle 3.png";
import "./Feeds.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import iButton from "../utils/images/Vector (1).png";

const Feeds = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <Card style={{ width: "100%", marginTop: "10px" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title> ✍ Article</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fs-3 mt-4">
                    What if famous brands had regular fonts? Meet RegularBrands
                  </Card.Text>
                  <p className="fs-4 mb-5 ">
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle
                        className="fs-4 "
                        variant="white"
                        id="dropdown-basic"
                        size="sm"
                      >
                        ...
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Education
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
                <Card.Text className="fs-4 opacity-50 ">
                  I'have worked in UX for the better part of a decade. From now
                  on, I plan to rei...
                </Card.Text>
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img src={profile} alt="" />
                      </div>
                      <p className="mt-2 fs-4">Sharthak Kamra</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center  gap-4">
                      <p className="fs-5 mt-2">👁 1.4k views</p>

                      <div className="d-flex justify-content-center align-items-center">
                        <img width={20} height={20} src={share} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "100%", marginTop: "10px" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title> ✍ Article</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fs-3 mt-4">
                    What if famous brands had regular fonts? Meet RegularBrands
                  </Card.Text>
                  <p className="fs-4 mb-5 ">
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle
                        className="fs-4 "
                        variant="white"
                        id="dropdown-basic"
                        size="sm"
                      >
                        ...
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Education
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
                <Card.Text className="fs-4 opacity-50 ">
                  I'have worked in UX for the better part of a decade. From now
                  on, I plan to rei...
                </Card.Text>
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img src={profile} alt="" />
                      </div>
                      <p className="mt-2 fs-4">Sharthak Kamra</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center  gap-4">
                      <p className="fs-5 mt-2">👁 1.4k views</p>

                      <div className="d-flex justify-content-center align-items-center">
                        <img width={20} height={20} src={share} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card style={{ width: "100%", marginTop: "10px" }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title> ✍ Article</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Text className="fs-3 mt-4">
                    What if famous brands had regular fonts? Meet RegularBrands
                  </Card.Text>
                  <p className="fs-4 mb-5 ">
                    {" "}
                    <Dropdown>
                      <Dropdown.Toggle
                        className="fs-4 "
                        variant="white"
                        id="dropdown-basic"
                        size="sm"
                      >
                        ...
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Event</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Education
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
                <Card.Text className="fs-4 opacity-50 ">
                  I'have worked in UX for the better part of a decade. From now
                  on, I plan to rei...
                </Card.Text>
                <div className="container">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-center align-items-center gap-3">
                      <div>
                        <img src={profile} alt="" />
                      </div>
                      <p className="mt-2 fs-4">Sharthak Kamra</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center  gap-4">
                      <p className="fs-5 mt-2">👁 1.4k views</p>

                      <div className="d-flex justify-content-center align-items-center">
                        <img width={20} height={20} src={share} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="mx-4">
                <p className="fs-4">
                  {" "}
                  <MdOutlineLocationOn />
                  Nodia, India <HiPencil />
                </p>
                <p className="fs-5 opacity-50">
                  {" "}
                  <img src={iButton} alt="" /> Your location help us server
                  better and extend a personalised experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeds;
