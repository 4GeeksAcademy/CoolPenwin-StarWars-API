import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/Single.js";
import { SingleAll } from "./views/SingleALL.js";
import { SingleChar } from "./views/SingleChar.js";
import { SinglePlanet } from "./views/SinglePlanet.js";
import { SingleStarships } from "./views/SingleStarships.js";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Err404 } from "./component/404";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo" element={<Demo />} />

            <Route path="/:type/:theid" element={<SingleAll />} />
            
            {/* <Route path="/Single/:category/:uid" element={<Single />} /> */}
{/* 
            <Route path="/Character/:theid" element={<SingleChar />} />
            <Route path="/Planets/:theid" element={<SinglePlanet />} />
            <Route path="/Starships/:theid" element={<SingleStarships />} /> */}

            <Route path="*" element={<Err404 />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
