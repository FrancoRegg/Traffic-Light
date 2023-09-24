import React, { useEffect, useState } from "react";



//create your first component
const TrafficLight = () => {
  const [color, setColor] = useState("red");  //cada vez aque la variable color cambia tambien lo hace el HTML 

  const ColorChange = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else (color === "green"); {
      setColor("red")
    }

//Utilizo un temporizador para que el color cambie solo cada cinco segundos
    useEffect(() => {
      const colorRotation = setInterval(() => {
        ColorChange()
      }, 5000);

      return () => {
        clearInterval(colorRotation)
      };
    }, [color])
  };

  return (
    <div className="container">
      <div className="traffic-light">
        <div className={`circle red ${color === "red" ? "active" : ""}`}
          onClick={ColorChange}>
        </div>
        <div className={`circle yellow ${color === "yellow" ? "active" : ""}`}
          onClick={ColorChange}>
        </div>
        <div className={`circle green ${color === "green" ? "active" : ""}`}
          onClick={ColorChange}>
        </div>
      </div>
      <div className="stick">
        <div className="shift-button">
          <button onClick={ColorChange}></button>
        </div>
      </div>
      
    </div>
  );
};

export default TrafficLight;
