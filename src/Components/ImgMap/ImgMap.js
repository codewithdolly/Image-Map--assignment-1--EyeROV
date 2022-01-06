import React, { useState } from "react";
import "./ImgMap.scss";
import sonarmap from "../Images/map.png";

const imgObj = [
  {
    title: "Step - Apron step",
    coords: "55,167,764,270",
    shape: "rect",
  },
  {
    title: "Crater - at location 1",
    coords: "591,19,690,145",
    shape: "rect",
  },
];

const ImgMap = () => {
  return (
    <>
      <div className="imgMap">
        <img src={sonarmap} alt="sonarmap" useMap="#workmap" />
        <map name="workmap">
          {imgObj.map((obj) => {
            return (
              <>
                <area
                  shape={obj.shape}
                  coords={obj.coords}
                  href="#"
                  title={obj.title}
                  alt={obj.title}
                />
              </>
            );
          })}
        </map>
      </div>
    </>
  );
};

export default ImgMap;
