import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BB8Switch } from "./BB8switch";
import Pattern from "./patronMovil.js"; // Asegúrate de importar tu componente Pattern

export const Navbar = () => {
  const { store } = useContext(Context);

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
        <div className="dropdown">
          <button className="dropbtn">Liked Things</button>
          <div className="dropdown-content">
            {store.favoriteItem}
          </div>
        </div>
      </div>
    </nav>
  );
};
