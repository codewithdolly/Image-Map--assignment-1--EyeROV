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
  const [shown, setShown] = useState(false);
  const [creater, setCreator] = useState(false);

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
                  alt={obj.title}
                  onMouseEnter={() => setShown(true)}
                  onMouseLeave={() => setShown(false)
                  }
                //   onMouseEnter={() => setCreator(true)}
                //   onMouseLeave={() => setCreator(false)}

                />
                {shown && <div>{obj.title}</div>}
               
              </>
            );
          })}
           {/* {creater && <div>Crater - at location 1</div>} */}
        </map>
      </div>
    </>
  );
};

export default ImgMap;
