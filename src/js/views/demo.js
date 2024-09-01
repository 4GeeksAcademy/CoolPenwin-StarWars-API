import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LikeSwitch } from "../component/LikeSwitch";
import "../../styles/demo.css";
import violentKitty from "../../img/violentKitty.jpg";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadCharacters();
    actions.loadPlanets();
    actions.loadStarships();
  }, []);

  return (
    <div className="container">
      <h1 className="text-danger my-3">Characters</h1>
      <div
        className="row flex-nowrap scrollbar"
        id="style-15"
        style={{ overflowX: "auto", maxWidth: "100vw" }}
      >
        {store.characters.map((character, index) => (
          <div class="star-wars-card" key={index}>
            <div class="card-content">
              <div class="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span class="card-title">
                {character.properties.name}
                {/* gender={character.properties.gender}
                  hair_color={character.properties.hair_color}
                  eye_color={character.properties.eye_color}
                  uid={character.uid} */}
              </span>
              <div className="row spacebetwen">
                <button class="card-button">Ver más</button>
                <LikeSwitch />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-danger my-3">Planets</h1>
      <div
        className="row flex-nowrap scrollbar"
        id="style-15"
        style={{ overflowX: "auto", maxWidth: "100vw" }}
      >
        {store.planets.map((planet, index) => (
          <div class="star-wars-card" key={index}>
            <div class="card-content">
              <div class="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span class="card-title">
              {planet.properties.name}
                            {/* population={planet.properties.population}
                            terrain={planet.properties.terrain}
                            uid={planet.uid} */}
              </span>
              <div className="row spacebetwen">
                <button class="card-button">Ver más</button>
                <LikeSwitch />
              </div>
            </div>
          </div>
        ))}
      </div>


      <h1 className="text-danger my-3">Starships</h1>
      <div
        className="row flex-nowrap scrollbar"
        id="style-15"
        style={{ overflowX: "auto", maxWidth: "100vw" }}
      >
        {store.starships.map((starship, index) => (
          <div class="star-wars-card" key={index}>
            <div class="card-content">
              <div class="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <span class="card-title">
              {starship.properties.name}
                            {/* cost_in_credits={starship.properties.cost_in_credits}
                            passengers={starship.properties.passengers}
                            uid={starship.uid} */}
              </span>
              <div className="row spacebetwen">
                <button class="card-button">Ver más</button>
                <LikeSwitch />
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <br />
      <br />
      <br />
    
    </div>
  );
};
