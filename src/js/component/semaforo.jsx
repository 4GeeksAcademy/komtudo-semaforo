import React, { useState } from "react";

const Semaforo = () => {

    const [selectedColor, setSelectedColor] = useState("red");

    return (

        <div className="traffic-light p-2">

            <div
                onClick={() => setSelectedColor("red")}
                className={
                    "light red mb-2 " + (selectedColor === "red" ? "glow" : "")
                } ></div>
            <div 
                onClick={() => setSelectedColor("yellow")}
                className={
                    "light yellow mb-2 " + (selectedColor === "yellow" ? "glow" : "")
                }></div>
            <div 
                onClick={() => setSelectedColor("green")}
                className={
                    "light green mb-2 " + (selectedColor === "green" ? "glow" : "")
                }></div>

        </div>

    );
}

export default Semaforo;