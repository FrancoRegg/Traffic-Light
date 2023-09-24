import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("red");  //cada vez aque la variable color cambia tambien lo hace el HTML 

  const ColorChange = () => {
    if (color === "red") setColor("yellow");
  else if (color === "yellow") setColor("green");
  else if (color === "green") setColor("red");
  };

//Utilizo un temporizador para que el color cambie solo cada cinco segundos
    /*useEffect(() => {
      const colorRotation = setInterval(() => {
        ColorChange()
      }, 2000);

      return () => {
        clearInterval(colorRotation)
      };
    }, [color])
  };*/

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`circle red ${color === "red" && "active"}`}
          onClick={() => setColor("red")}>
        </div>
        <div className={`circle yellow ${color === "yellow" && "active"}`}
          onClick={() => setColor("yellow")}>
        </div>
        <div className={`circle green ${color === "green" && "active"}`}
          onClick={() => setColor("yellow")}>
        </div>
      </div>
      <div className="stick">
        <div className="warning"></div>
        <div className="shift-button">
          <button onClick={ColorChange}><FontAwesomeIcon icon={faArrowUp}/></button>
        </div>
      </div>
      
    </div>
  );
};

export default TrafficLight;
