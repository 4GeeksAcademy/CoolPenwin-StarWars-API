import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LikeSwitch } from "../component/LikeSwitch";
import "../../styles/demo.css";
import violentKitty from "../../img/violentKitty.jpg";

export const Demo = () => {
  const { store, actions } = useContext(Context);

  const handleToggle = (name) => {
    actions.favoriteList(name);
  };

  const isLiked = (name) => {
    return store.favoriteItem.includes(name);
  };

  return (
    <div className="container">
      <h1 className="text-danger my-3">Characters</h1>
      <div
        className="row flex-nowrap scrollbar"
        id="style-15"
        style={{ overflowX: "auto", maxWidth: "100vw" }}
      >
        {store.characters.map((character, index) => (
          <div className="star-wars-card" key={index}>
            <div className="card-content">
              <div className="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Kitty"
                />
              </div>
              <span className="card-title">{character.properties.name}</span>
              <div className="row space-between">
                <Link to={"/Character/" + character.uid}>
                  <button className="card-button">Ver más</button>
                </Link>
                <button onClick={() => handleToggle(character.properties.name)}>
                  <LikeSwitch isLiked={isLiked(character.properties.name)} onToggle={() => handleToggle(character.properties.name)} />
                  LIKE
                </button>
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
          <div className="star-wars-card" key={index}>
            <div className="card-content">
              <div className="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Kitty"
                />
              </div>
              <span className="card-title">{planet.properties.name}</span>
              <div className="row space-between">
                <Link to={"/Planets/" + planet.uid}>
                  <button className="card-button">Ver más</button>
                </Link>
                <button onClick={() => handleToggle(planet.properties.name)}>
                  <LikeSwitch isLiked={isLiked(planet.properties.name)} onToggle={() => handleToggle(planet.properties.name)} />
                  LIKE
                </button>
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
          <div className="star-wars-card" key={index}>
            <div className="card-content">
              <div className="image-placeholder">
                <img
                  src={violentKitty}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  alt="Kitty"
                />
              </div>
              <span className="card-title">{starship.properties.name}</span>
              <div className="row space-between">
                <Link to={"/Starships/" + starship.uid}>
                  <button className="card-button">Ver más</button>
                </Link>
                <button onClick={() => handleToggle(starship.properties.name)}>
                  <LikeSwitch isLiked={isLiked(starship.properties.name)} onToggle={() => handleToggle(starship.properties.name)} />
                  LIKE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzQxZjFlMXk4c2IzcjAwZXB0dDF0aXdlODNvZnUxbTZqZmE2b3hocCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hQW2Ngiulc5kQpNlsZ/giphy.webp"
        alt="GIF"
      />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};
