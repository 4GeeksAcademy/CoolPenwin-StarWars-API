import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const SingleStarships = ({ character, starships, planets }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.starships[params.theid - 1].properties);

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
                {store.starships[params.theid - 1].properties.name === "n/a" || undefined
                  ? " "
                  : store.starships[params.theid - 1].properties.name}
                <br />
              </p>
            </div>
            <div className="character-details">
             
              <p>starchipData<br/><br/>
                {store.starships[params.theid - 1].properties.model === "n/a" || undefined
                  ? " "
                  : "model  : " + store.starships[params.theid - 1].properties.model}
                <br />
                {store.starships[params.theid - 1].properties.starship_class === "n/a" || undefined
                  ? " "
                  : "starship_class  : " + store.starships[params.theid - 1].properties.starship_class}
                <br />
                {store.starships[params.theid - 1].properties.manufacturer === "n/a" || undefined
                  ? " "
                  : "manufacturer  : " + store.starships[params.theid - 1].properties.manufacturer}
                <br />
                {store.starships[params.theid - 1].properties.cost_in_credits === "n/a" || undefined
                  ? " "
                  : "cost_in_credits  : " + store.starships[params.theid - 1].properties.cost_in_credits}
                <br />
                {store.starships[params.theid - 1].properties.length === "n/a" || undefined
                  ? " "
                  : "length  : " + store.starships[params.theid - 1].properties.length}
                <br />
                {store.starships[params.theid - 1].properties.crew === "n/a" || undefined
                  ? " "
                  : "crew  : " + store.starships[params.theid - 1].properties.crew}
                <br />
                {store.starships[params.theid - 1].properties.passengers === "n/a" || undefined
                  ? " "
                  : "passengers  : " + store.starships[params.theid - 1].properties.passengers}
                <br />
                {store.starships[params.theid - 1].properties.max_atmosphering_speed === "n/a" || undefined
                  ? " "
                  : "max_atmosphering_speed   : " + store.starships[params.theid - 1].properties.max_atmosphering_speed}
                <br />
                {store.starships[params.theid - 1].properties.hyperdrive_rating === "n/a" || undefined
                  ? " "
                  : "hyperdrive_rating  : " + store.starships[params.theid - 1].properties.hyperdrive_rating}
                <br />
                {store.starships[params.theid - 1].properties.MGLT === "n/a" || undefined
                  ? " "
                  : "MGLT  : " + store.starships[params.theid - 1].properties.MGLT}
                <br />
                {store.starships[params.theid - 1].properties.cargo_capacity === "n/a" || undefined
                  ? " "
                  : "cargo_capacity   : " + store.starships[params.theid - 1].properties.cargo_capacity}
                <br />
                {store.starships[params.theid - 1].properties.cargo_capacity === "n/a" || undefined
                  ? " "
                  : "cargo_capacity   : " + store.starships[params.theid - 1].properties.cargo_capacity}
                <br />
              </p>
              <button 
                className="card-button" 
                onClick={() => handleToggle(store.starships[params.theid - 1].properties.name)}
              >
                {isLiked(store.starships[params.theid - 1].properties.name) ? "LIKED" : "LIKE"}
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
      </Link>
      <br />     <br />     <br />
    </div>
  );
};

SingleStarships.propTypes = {
  match: PropTypes.object,
};