import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const SinglePlanet = ({ character, starships, planets }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.planets[params.theid - 1].properties);

  const handleToggle = (name) => {
    console.log("Toggling favorite for:", name); // Verificar nombre del ítem
    actions.favoriteList(name);
  };

  const isLiked = (name) => {
    const liked = store.favoriteItem.includes(name);
    console.log("Is liked:", name, liked); // Verificar si el ítem está en favoritos
    return liked;
  };

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
              <p className="character-name">
                {store.planets[params.theid - 1].properties.name === "n/a" || undefined
                  ? " "
                  : store.planets[params.theid - 1].properties.name}
                <br />
              </p>
            </div>
            <div className="character-details">
              
              <p>planetDAta<br/><br/>
                {store.planets[params.theid - 1].properties.diameter === "n/a" || undefined
                  ? " "
                  : "diameter : " + store.planets[params.theid - 1].properties.diameter}
                <br />
                {store.planets[params.theid - 1].properties.rotation_period === "n/a" || undefined
                  ? " "
                  : "rotation_period : " + store.planets[params.theid - 1].properties.rotation_period}
                <br />
                {store.planets[params.theid - 1].properties.orbital_period === "n/a" || undefined
                  ? " "
                  : "orbital_period  : " + store.planets[params.theid - 1].properties.orbital_period}
                <br />
                {store.planets[params.theid - 1].properties.gravity === "n/a" || undefined
                  ? " "
                  : "gravity  : " + store.planets[params.theid - 1].properties.gravity}
                <br />
                {store.planets[params.theid - 1].properties.population === "n/a" || undefined
                  ? " "
                  : "population  : " + store.planets[params.theid - 1].properties.population}
                <br />
                {store.planets[params.theid - 1].properties.climate === "n/a" || undefined
                  ? " "
                  : "climate  : " + store.planets[params.theid - 1].properties.climate}
                <br />
                {store.planets[params.theid - 1].properties.terrain === "n/a" || undefined
                  ? " "
                  : "terrain  : " + store.planets[params.theid - 1].properties.terrain}
                <br />
                {store.planets[params.theid - 1].properties.surface_water === "n/a" || undefined
                  ? " "
                  : "surface_water   : " + store.planets[params.theid - 1].properties.surface_water}
                <br />
                {store.planets[params.theid - 1].properties.residents === "n/a" || undefined
                  ? " "
                  : "residents  : " + store.planets[params.theid - 1].properties.residents}
                <br />
              </p>
              <br />
              <button 
                className="card-button" 
                onClick={() => handleToggle(store.planets[params.theid - 1].properties.name)}
              >
                {isLiked(store.planets[params.theid - 1].properties.name) ? "LIKED" : "LIKE"}
              </button>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>     <br />     <br />     <br />
    </div>
  );
};

SinglePlanet.propTypes = {
  match: PropTypes.object,
};