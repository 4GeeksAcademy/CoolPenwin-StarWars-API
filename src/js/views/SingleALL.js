import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import violentKitty from "../../img/violentKitty.jpg";

export const SingleAll = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  
  const resourceType = params.type.toLowerCase(); // Convertir a minúsculas para coincidir con las claves del store
  const resourceId = params.theid; // Usar directamente el id
  
  console.log("Params:", params);
  console.log("Resource Type:", resourceType);
  console.log("Resource ID:", resourceId);
  
  const resource = store[resourceType]?.find(item => item.uid === resourceId) || null;
  
  console.log("Resource:", resource);

  if (!resource || !resource.properties) {
    return <div>Resource not found</div>;
  }

  const handleToggle = (name) => {
    console.log("Toggling favorite for:", name);
    actions.favoriteList(name);
  };

  const isLiked = (name) => {
    return store.favoriteItem.includes(name);
  };

  return (
    <div className="jumbotron text-center d-flex align-items-center justify-content-center">
      <div id="star-wars-card">
        <div className="card-content">
          <div className="card-item">
            <div className="card-header">
              <div className="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Placeholder"
                />
              </div>
              <span className="card-title">  
                {resource.properties.name !== "n/a" && resource.properties.name}
                </span>
                <br />
                <br />
            </div>
            <div className="resource-details">
              {/* Mostrar los detalles del recurso dependiendo del tipo */}
              {resourceType === "characters" && (
                <div>
                  <p>Gender: {resource.properties.gender}</p>
                  <p>Birth Year: {resource.properties.birth_year}</p>
                  <p>Skin Color: {resource.properties.skin_color}</p>
                  <p>Hair Color: {resource.properties.hair_color}</p>
                  <p>Eye Color: {resource.properties.eye_color}</p>
                  <p>Height: {resource.properties.height} cm</p>
                  <p>Mass: {resource.properties.mass} wtf</p>
                </div>
              )}
              {resourceType === "planets" && (
                <div>
                  <p>Diameter: {resource.properties.diameter}</p>
                  <p>Climate: {resource.properties.climate}</p>
                  <p>Terrain: {resource.properties.terrain}</p>
                  <p>Population: {resource.properties.population}</p>
                  <p>Rotation period: {resource.properties.rotation_period}</p>
                  <p>Orbital period: {resource.properties.orbital_period}</p>
                  <p>Gravity: {resource.properties.gravity}</p>
                  <p>Water surface: {resource.properties.surface_water}</p>
                  
                </div>
              )}
              {resourceType === "starships" && (
                <div>
                  <p>Model: {resource.properties.model}</p>
                  <p>Starship Class: {resource.properties.starship_class}</p>
                  <p>Manufacturer: {resource.properties.manufacturer}</p>
                  <p>Length: {resource.properties.length}</p>
                  <p>Max crew: {resource.properties.crew}</p>
                  <p>Max cargo: {resource.properties.cargo_capacity}</p>
                  <p>Max Atm speed: {resource.properties.max_atmosphering_speed} parSec</p>
                  <p>Hiper Drive speed: {resource.properties.hyperdrive_rating}</p>
                  <p>MGLT: {resource.properties.MGLT} </p>
                  <p>Prize: {resource.properties.cost_in_credits} credits</p>
                </div>
              )}

              {/* Botón de favoritos */}
              <button
                className="card-button"
                onClick={() => handleToggle(resource.properties.name)}
              >
                {isLiked(resource.properties.name) ? "LIKED" : "LIKE"}
              </button>
              <br/>
              <br/>
              <br/>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
      <button className="HOME">
  <svg
    height="24"
    width="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      fill="currentColor"
    ></path>
  </svg>
  <span>
          Back home
        </span>
        
</button>
      </Link>
    </div>
  );
};

SingleAll.propTypes = {
  match: PropTypes.object,
};