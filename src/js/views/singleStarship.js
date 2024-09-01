import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/single.css";
import { LikeSwitch } from "../component/LikeSwitch";
import violentKitty from "../../img/violentKitty.jpg";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">


<div class="star-wars-card">
  <div class="card-content">
  <div class="image-placeholder"><img src={violentKitty} style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
  <span class="card-title">Luke Skywalker <LikeSwitch/></span>
    
    <button class="card-button">Ver más</button>
  </div>
</div>

			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
