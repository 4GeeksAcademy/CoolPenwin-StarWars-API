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
    <div className="jumbotron text-center">
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
              <p className="resource-name">
                {resource.properties.name !== "n/a" && resource.properties.name}
                <br />
              </p>
            </div>
            <div className="resource-details">
              {/* Mostrar los detalles del recurso dependiendo del tipo */}
              {resourceType === "characters" && (
                <div>
                  <p>Gender: {resource.properties.gender}</p>
                  <p>Birth Year: {resource.properties.birth_year}</p>
                  <p>Skin Color: {resource.properties.skin_color}</p>
                  <p>Hair Color: {resource.properties.hair_color}</p>
                </div>
              )}
              {resourceType === "planets" && (
                <div>
                  <p>Diameter: {resource.properties.diameter}</p>
                  <p>Climate: {resource.properties.climate}</p>
                  <p>Terrain: {resource.properties.terrain}</p>
                </div>
              )}
              {resourceType === "starships" && (
                <div>
                  <p>Model: {resource.properties.model}</p>
                  <p>Starship Class: {resource.properties.starship_class}</p>
                  <p>Manufacturer: {resource.properties.manufacturer}</p>
                </div>
              )}

              {/* Botón de favoritos */}
              <button
                className="card-button"
                onClick={() => handleToggle(resource.properties.name)}
              >
                {isLiked(resource.properties.name) ? "LIKED" : "LIKE"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link to="/">
        <span className="btn btn-primary btn-lg" role="button">
          Back home
        </span>
      </Link>
    </div>
  );
};

SingleAll.propTypes = {
  match: PropTypes.object,
};