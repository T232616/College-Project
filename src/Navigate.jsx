import React from "react";
import './Navigate.css';
import { NavLink } from "react-router-dom";
const Navigate = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavLink exact
            className="col-6 text-center sign"
            activeClassName="signed"
            to="/"
          >
            Sign Up
          </NavLink>
          <NavLink exact
            className="col-6 text-center sign"
            activeClassName="signed"
            to="/register"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default Navigate;
