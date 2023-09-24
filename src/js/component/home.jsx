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

    useEffect(()=>{                                 
      const colorRotation = setInterval (() => {
        ColorChange()
      }, 5000);

      return () =>{
        clearInterval (colorRotation)
      };
    }, [color])
  }
  return (
		
	);
};

export default TrafficLight;
