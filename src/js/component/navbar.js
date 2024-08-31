import React from "react";
import { Link } from "react-router-dom";
import { BB8Switch } from "./BB8switch";
import Pattern from "./patronMovil.js"; // Asegúrate de importar tu componente Pattern

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3 patroned">
      <Link to="/">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"
          alt="Star Wars Logo"
          style={{ width: "auto", height: "111px" }}
        />
      </Link>
      <div style={{ width: "auto", height: "5px" }}>
        <BB8Switch />
      </div>
      <div className="ml-auto">
        <Link to="/demo">
          <button className="btn btn-primary">
            Check the Context in action
          </button>
        </Link>
      </div>
    </nav>
  );
};
