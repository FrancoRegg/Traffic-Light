import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("red");  //cada vez aque la variable "color" cambia tambien lo hace el HTML 

  const ColorChange = () => {
    if (color === "red") setColor("yellow");
  else if (color === "yellow") setColor("green");
  else if (color === "green") setColor("red");
  };

//Utilizo un temporizador para que el color cambie solo cada cinco segundos
   /* useEffect(() => {
      const colorRotation = setInterval(() => {
        ColorChange()
      }, 2000);
      return () => {
        clearInterval(colorRotation)
      };
    }, [])
  */

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`circle red ${color === "red" && "activered"}`}
          onClick={() => setColor("red")}>
        </div>
        <div className={`circle yellow ${color === "yellow" && "activeyellow"}`}
          onClick={() => setColor("yellow")}>
        </div>
        <div className={`circle green ${color === "green" && "activegreen"}`}
          onClick={() => setColor("green")}>
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
