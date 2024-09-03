import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { BB8Switch } from "./BB8switch";
import Pattern from "./patronMovil.js"; // Asegúrate de importar tu componente Pattern

export const Navbar = () => {
  const { store, actions } = useContext(Context);

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
          <button className="dropbtn">
            <b>

            Liked Things
            </b>
            </button>
          <div className="dropdown-content">
            {store.favoriteItem.length === 0 ? (
              <p>
                <b>These are not the elements you are looking for</b>
              </p>
            ) : (
              <>
                {store.favoriteItem.map((item, index) => (
                  <li
                    key={index}
                    className="d-flex justify-content-between border"
                  >
                    <i
                      className="fas fa-trash m-2 "
                      onClick={() => actions.favoriteList(item)}
                    ></i>
                    <span className="m-2 ">
                      <b>{item}</b>
                    </span>
                  </li>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
