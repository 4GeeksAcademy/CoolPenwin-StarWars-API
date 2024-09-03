import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const SinglePlanet = ({ character, starships, planets }) => {
  const { store, actions } = useContext(Context);
  // const { uid } = useParams();
  const params = useParams();
  console.log(store.planets[params.theid - 1].properties);

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
                {/* <img
                  src={}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                /> */}
              </div>
              <p className="character-name">
             
                {store.planets[params.theid - 1].properties.name === "n/a" ||
                undefined
                  ? " "
                  : store.planets[params.theid - 1].properties.name}
                <br />
               
              </p>
            </div>
            <div className="character-details">
              <LikeSwitch />

              {/* <p >characterData<br/><br/>
                {store.characters[params.theid-1].properties.gender==="n/a"||undefined ? " ": "gender : " + store.characters[params.theid-1].properties.gender }<br/>
                {store.characters[params.theid-1].properties.birth_year==="n/a"||undefined ? " ": "birth year : " + store.characters[params.theid-1].properties.birth_year }<br/>
                {store.characters[params.theid-1].properties.skin_color==="n/a"||undefined ? " ": "skin_color : " + store.characters[params.theid-1].properties.skin_color }<br/>
                {store.characters[params.theid-1].properties.hair_color==="n/a"||undefined ? " ": "hair_color : " + store.characters[params.theid-1].properties.hair_color }<br/>
                {store.characters[params.theid-1].properties.eye_color==="n/a"||undefined ? " ": "eye_color : " + store.characters[params.theid-1].properties.eye_color }<br/>
                {store.characters[params.theid-1].properties.height==="n/a"||undefined ? " ": "height : " + store.characters[params.theid-1].properties.height +" Cm"}<br/>
                {store.characters[params.theid-1].properties.mass==="n/a"||undefined ? " ": "mass : " + store.characters[params.theid-1].properties.mass +" WTF"}<br/>
                  </p><br/> */}
              <p>
                planetDAta
                <br />
                <br />
                {store.planets[params.theid - 1].properties.diameter ===
                  "n/a" || undefined
                  ? " "
                  : "diameter : " +
                    store.planets[params.theid - 1].properties.diameter}
                <br />
                {store.planets[params.theid - 1].properties.rotation_period ===
                  "n/a" || undefined
                  ? " "
                  : "rotation_period : " +
                    store.planets[params.theid - 1].properties.rotation_period}
                <br />
                {store.planets[params.theid - 1].properties.orbital_period ===
                  "n/a" || undefined
                  ? " "
                  : "orbital_period  : " +
                    store.planets[params.theid - 1].properties.orbital_period}
                <br />
                {store.planets[params.theid - 1].properties.gravity === "n/a" ||
                undefined
                  ? " "
                  : "gravity  : " +
                    store.planets[params.theid - 1].properties.gravity}
                <br />
                {store.planets[params.theid - 1].properties.population ===
                  "n/a" || undefined
                  ? " "
                  : "population  : " +
                    store.planets[params.theid - 1].properties.population}
                <br />
                {store.planets[params.theid - 1].properties.climate === "n/a" ||
                undefined
                  ? " "
                  : "climate  : " +
                    store.planets[params.theid - 1].properties.climate}
                <br />
                {store.planets[params.theid - 1].properties.terrain === "n/a" ||
                undefined
                  ? " "
                  : "terrain  : " +
                    store.planets[params.theid - 1].properties.terrain}
                <br />
                {store.planets[params.theid - 1].properties.surface_water ===
                  "n/a" || undefined
                  ? " "
                  : "surface_water   : " +
                    store.planets[params.theid - 1].properties.surface_water}
                <br />
                {store.planets[params.theid - 1].properties.residents ===
                  "n/a" || undefined
                  ? " "
                  : "residents  : " +
                    store.planets[params.theid - 1].properties.residents}
                <br />
              </p>
              <br />
              {/* <p >starchipData<br/><br/>
                {store.starships[params.theid-1].properties.model ==="n/a"||undefined ? " ": "model  : " + store.starships[params.theid-1].properties.model  }<br/>
                {store.starships[params.theid-1].properties.starship_class ==="n/a"||undefined ? " ": "starship_class  : " + store.starships[params.theid-1].properties.starship_class  }<br/>
                {store.starships[params.theid-1].properties.manufacturer ==="n/a"||undefined ? " ": "manufacturer  : " + store.starships[params.theid-1].properties.manufacturer  }<br/>
                {store.starships[params.theid-1].properties.cost_in_credits ==="n/a"||undefined ? " ": "cost_in_credits  : " + store.starships[params.theid-1].properties.cost_in_credits  }<br/>
                {store.starships[params.theid-1].properties.length ==="n/a"||undefined ? " ": "length  : " + store.starships[params.theid-1].properties.length  }<br/>
                {store.starships[params.theid-1].properties.crew ==="n/a"||undefined ? " ": "crew  : " + store.starships[params.theid-1].properties.crew  }<br/>
                {store.starships[params.theid-1].properties.passengers ==="n/a"||undefined ? " ": "passengers  : " + store.starships[params.theid-1].properties.passengers  }<br/>
                {store.starships[params.theid-1].properties.max_atmosphering_speed  ==="n/a"||undefined ? " ": "max_atmosphering_speed   : " + store.starships[params.theid-1].properties.max_atmosphering_speed   }<br/>
                {store.starships[params.theid-1].properties.hyperdrive_rating ==="n/a"||undefined ? " ": "hyperdrive_rating  : " + store.starships[params.theid-1].properties.hyperdrive_rating  }<br/>
                {store.starships[params.theid-1].properties.MGLT ==="n/a"||undefined ? " ": "MGLT  : " + store.starships[params.theid-1].properties.MGLT  }<br/>
                {store.starships[params.theid-1].properties.cargo_capacity  ==="n/a"||undefined ? " ": "cargo_capacity   : " + store.starships[params.theid-1].properties.cargo_capacity   }<br/>
                {store.starships[params.theid-1].properties.cargo_capacity  ==="n/a"||undefined ? " ": "cargo_capacity   : " + store.starships[params.theid-1].properties.cargo_capacity   }<br/>
                </p> */}
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

SinglePlanet.propTypes = {
  match: PropTypes.object,
};
