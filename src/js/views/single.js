import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const Single = ({ character  }) => {
  const { store, actions } = useContext(Context);
  const { uid } = useParams();
  return (
<div className="jumbotron text-center">
  <div id="star-wars-card">
    <div className="card-content">
      {store.characters.map((character, index) => (
        <div key={uid} className="card-item">
          <div className="card-header">
            <div className="image-placeholder">
              <img
                src={violentKitty}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <p className="character-name">{character.name}</p>
          </div>
          <div className="character-details">
          <h1>{character.name}</h1>
            <LikeSwitch />
          </div>
        </div>
      ))}
    </div>
  </div>

     

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

Single.propTypes = {
  match: PropTypes.object,
};
