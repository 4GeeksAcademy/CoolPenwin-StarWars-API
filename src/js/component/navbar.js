import React from "react";
import { Link } from "react-router-dom";
import { BB8Switch } from "./BB8switch";
import Pattern from "./patronMovil.js"; // Asegúrate de importar tu componente Pattern

export const Navbar = () => {
  return (
    
      <nav className="navbar navbar-light bg-light mb-3 patroned">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="">
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
