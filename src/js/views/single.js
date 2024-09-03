import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const Single = ({ character }) => {
  const { store, actions } = useContext(Context);
  // const { uid } = useParams();
  const params = useParams();
  console.log(store.characters);

  return (
    <div className="jumbotron text-center">
      <div id="star-wars-card">
        <div className="card-content">
          <div className="card-item">
            <div className="card-header">
              <div className="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <p className="character-name"></p>
            </div>
            <div className="character-details">
              <h1> {store.characters[params.theid-1].properties.name}</h1>
              <p>  
                gender={store.characters[params.theid-1].properties.gender}<br/>
                hair_color={store.characters[params.theid-1].properties.hair_color}<br/>
                  eye_color={store.characters[params.theid-1].properties.eye_color}<br/>
                  
                  </p>
              <LikeSwitch />
            </div>
          </div>
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
