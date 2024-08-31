import React from "react";
import { SaberLoader } from "./LoadSabers";

export const Footer = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div
          className="fixed-bottom p-4"
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <a
                href="https://github.com/CoolPenwin"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5px",
                  marginRight: "5px",
                }}
              >
                <img
                  className="logo"
                  src="https://avatars.githubusercontent.com/u/171165391?v=4"
                  style={{
                    border: "1px solid rgb(255, 255, 255)",
                    borderRadius: "50%",
                    width: "40px",
                  }}
                  alt="logo"
                />
                CoolPenwin {"   "}
              </a>
            </div>
            <SaberLoader />
            <div>
              <a
                href="https://www.4geeksacademy.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "5px",
                }}
              >
               {"   "} 4geeksacademy
                <img
                  className="logo"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.NzJUc0PYtkgp7lfNKizmgQHaHB%26pid%3DApi&f=1&ipt=271cb3eb7e5f15522c250313a63e781bdb17fd428148a3cfa3fc136c7c118f42&ipo=images"
                  style={{
                    border: "1px solid rgb(255, 255, 255)",
                    borderRadius: "50%",
                    width: "35px",
                    marginLeft: "5px",
                  }}
                  alt="logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
