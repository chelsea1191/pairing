import React, { useState } from 'react';
import './App.css';

function App() {

  const [redValue, setRedValue] = useState(120);
  const [greenValue, setGreenValue] = useState(120);
  const [blueValue, setBlueValue] = useState(120)

  const handleRedChange = event => {
    setRedValue(event.target.value)
    const currentRedValue = redValue
    console.log("red is:", currentRedValue)
  }

  const handleGreenChange = event => {
    setGreenValue(event.target.value)
    const currentGreenValue = greenValue
    console.log("green is:", currentGreenValue)
  }

  const handleBlueChange = event => {
    setBlueValue(event.target.value)
    const currentBlueValue = blueValue
    console.log("blue is:", currentBlueValue)
  }


  const rgbValue = {backgroundColor: `rgb(${redValue},${greenValue},${blueValue})`}



  return (
    <div>

      <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min={0} max={255} value={redValue} onChange={handleRedChange} />
      </div>
      <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min={0} max={255} value={greenValue} onChange={handleGreenChange} />
      </div>
      <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min={0} max={255} value={blueValue} onChange={handleBlueChange} />
      </div>

      <div className="square" style={rgbValue}>

      </div>


    </div>


  );
}

export default App;
