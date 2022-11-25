import React, { useReducer, useState } from "react";
import { Dropdown, NavLink } from "react-bootstrap";

const GroupTitle = () => {
  const initialState = { active: "" };

  function reducer(state, action) {
    switch (action.type) {
      case "allPost":
        return { active: "allPost" };
      case "article":
        return { active: "article" };
      case "event":
        return { active: "event" };
      case "education":
        return { active: "education" };
      case "jobs":
        return { active: "jobs" };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div className="container my-4 ">
      <div className="" style={{ zIndex: 1 }}>
        <div className="d-flex  justify-content-between  align-items-center   ">
          <div className="">
            <div className="d-flex align-items-center  justify-content-center gap-4 ">
              <NavLink to="#" onClick={() => dispatch({ type: "allPost" })}>
                {" "}
                <p
                  className={`${
                    state.active === "allPost"
                      ? "pb-2 border-bottom border-2 border-dark opacity-50 "
                      : "pb-2"
                  }`}
                >
                  All Post(23)
                </p>
              </NavLink>
              <NavLink onClick={() => dispatch({ type: "article" })}>
                <p
                  className={`${
                    state.active === "article"
                      ? "border-bottom border-2 border-dark opacity-50 d-md-block pb-2 d-none "
                      : "d-md-block pb-2 d-none "
                  }`}
                >
                  Article
                </p>
              </NavLink>
              <NavLink onClick={() => dispatch({ type: "event" })}>
                <p
                  className={`${
                    state.active === "event"
                      ? " border-bottom d-md-block opacity-50 pb-2 d-none border-2 border-dark"
                      : "d-md-block pb-2 d-none"
                  }`}
                >
                  Event
                </p>
              </NavLink>
              <NavLink onClick={() => dispatch({ type: "education" })}>
                <p
                  className={`${
                    state.active === "education"
                      ? " border-bottom d-md-block opacity-50 pb-2 d-none border-2 border-dark"
                      : "d-md-block pb-2 d-none"
                  }`}
                >
                  Education
                </p>
              </NavLink>
              <NavLink onClick={() => dispatch({ type: "jobs" })}>
                <p
                  className={`${
                    state.active === "jobs"
                      ? " border-bottom d-md-block opacity-50 pb-2 d-none border-2 border-dark"
                      : "d-md-block pb-2 d-none"
                  }`}
                >
                  Jobs
                </p>
              </NavLink>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-4">
            <div className="d-md-block  pb-2 d-none">
              <p>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    size="sm"
                  >
                    Write a post
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </p>
            </div>
            <div className="d-md-none pb-2 d-block">
              <Dropdown>
                <Dropdown.Toggle
                  className="py-0  "
                  variant="success"
                  id="dropdown-basic"
                  size="sm"
                >
                  Filter:All
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Event</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Education</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Jobs</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="d-md-block pb-2 d-none">
              <p>
                <button className="border-0 bg-primary text-white px-2 py-1 btn-sm rounded-2">
                  Join Groups
                </button>
              </p>
            </div>
          </div>
        </div>
        <p
          className="border-top border-secondary border-1 position-relative d-md-block    d-none "
          style={{ marginTop: "-20px", zIndex: -10 }}
        ></p>
      </div>
    </div>
  );
};

export default GroupTitle;
