import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const Single = ({ character  }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  return (
    <div className="jumbotron">
      <div class="star-wars-card">
        <div class="card-content">
          <div class="image-placeholder">
            <img
              src={violentKitty}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          {store.characters.map((character, index) => (
             <div key={index} class="card-title">
              
            <h2>{character.name}
            <LikeSwitch />
            </h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
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
