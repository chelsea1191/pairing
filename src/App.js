import React from 'react';
import './App.css';

function App() {

  return (
    <div>

      <div className="slidecontainer">
        <p>Color slider:</p>
        <input type="range" min="1" max="100" value="50"></input>
      </div>
      <div className="slidecontainer">
        <p>Color slider:</p>
        <input type="range" min="1" max="100" value="50"></input>
      </div>
      <div className="slidecontainer">
        <p>Color slider:</p>
        <input type="range" min="1" max="100" value="50"></input>
      </div>
      <div className="square">

      </div>


    </div>


  );
}

export default App;
