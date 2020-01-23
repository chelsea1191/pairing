import React, { useState } from 'react';
import './App.css';

function App() {

  const [redValue, setRedValue] = useState(120);
  const colorRedSelector = () => {

  }
  const handleChange = event => {
    setRedValue(event.target.value)
  }

  return (
    <div>

      <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min={0} max={255} value={redValue} onChange={handleChange} />
      </div>



      {/* <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min="0" max="255" value={redValue} onChange={handleChange} />
      </div>

      <div className="slidecontainer">
        <p>Color slider:</p>
        <input className="slider" type="range" min="0" max="255" value={redValue} onChange={handleChange} />
      </div> */}

      <div className="square">

      </div>


    </div>


  );
}

export default App;
