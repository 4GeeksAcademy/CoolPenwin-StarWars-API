import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const SingleChar = ({ character, starships, planets  }) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  console.log(store.characters[params.theid-1].properties);
  
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
                {store.characters[params.theid-1].properties.name==="n/a"||undefined ? " ":  store.characters[params.theid-1].properties.name }<br/>
              </p>
            </div>
            <div className="character-details">
             
              <p>characterData<br/><br/>
                {store.characters[params.theid-1].properties.gender==="n/a"||undefined ? " ": "gender : " + store.characters[params.theid-1].properties.gender }<br/>
                {store.characters[params.theid-1].properties.birth_year==="n/a"||undefined ? " ": "birth year : " + store.characters[params.theid-1].properties.birth_year }<br/>
                {store.characters[params.theid-1].properties.skin_color==="n/a"||undefined ? " ": "skin_color : " + store.characters[params.theid-1].properties.skin_color }<br/>
                {store.characters[params.theid-1].properties.hair_color==="n/a"||undefined ? " ": "hair_color : " + store.characters[params.theid-1].properties.hair_color }<br/>
                {store.characters[params.theid-1].properties.eye_color==="n/a"||undefined ? " ": "eye_color : " + store.characters[params.theid-1].properties.eye_color }<br/>
                {store.characters[params.theid-1].properties.height==="n/a"||undefined ? " ": "height : " + store.characters[params.theid-1].properties.height +" Cm"}<br/>
                {store.characters[params.theid-1].properties.mass==="n/a"||undefined ? " ": "mass : " + store.characters[params.theid-1].properties.mass +" WTF"}<br/>
              </p><br/>
              <button 
                className="card-button" 
                onClick={() => handleToggle(store.characters[params.theid-1].properties.name)}
              >
                {isLiked(store.characters[params.theid-1].properties.name) ? "LIKED" : "LIKE"}
              </button>
              <br />
              <br/>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" href="#" role="button">
          Back home
        </span>
      </Link>     <br />     <br />     <br />     <br />
    </div>
  );
};

SingleChar.propTypes = {
  match: PropTypes.object,
};