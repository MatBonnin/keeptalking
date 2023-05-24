import React, { useState } from 'react';

const WireModuleComponent = () => {
const [numWires, setNumWires] = useState(4);
const [wires, setWires] = useState(Array(numWires).fill(''));
const [serialNumber, setSerialNumber] = useState('');
const [instructions, setInstructions] = useState('');

const handleSubmit = (e) => {
e.preventDefault();
let tempInstructions = '';
const numRed = wires.filter((color) => color === 'rouge').length;
const lastDigitSerial = parseInt(serialNumber.slice(-1), 10);
const lastColor = wires[wires.length - 1];

if (numWires === 3) {
  if (wires.indexOf('rouge') === -1) {
    tempInstructions = 'Couper le deuxième fil.';
  } else if (wires.filter((color) => color === 'bleu').length > 1) {
    tempInstructions = 'Couper le dernier fil bleu.';
  } else {
    tempInstructions = 'Couper le dernier fil.';
  }
} else if (numWires === 4) {
  if (numRed > 1 && lastDigitSerial % 2 === 1) {
    tempInstructions = 'Couper le dernier fil rouge.';
  } else if (lastColor === 'jaune' && wires.indexOf('rouge') === -1) {
    tempInstructions = 'Couper le premier fil.';
  } else if (wires.indexOf('bleu') !== -1) {
    tempInstructions = 'Couper le premier fil.';
  } else if (wires.indexOf('jaune') !== -1) {
    tempInstructions = 'Couper le dernier fil.';
  } else {
    tempInstructions = 'Couper le deuxième fil.';
  }
} else if (numWires === 5) {
  if (lastColor === 'noir' && lastDigitSerial % 2 === 1) {
    tempInstructions = 'Couper le quatrième fil.';
  } else if (wires.indexOf('noir') === -1) {
    tempInstructions = 'Couper le deuxième fil.';
  } else {
    tempInstructions = 'Couper le premier fil.';
  }
} else if (numWires === 6) {
  if (wires.indexOf('jaune') === -1 && lastDigitSerial % 2 === 1) {
    tempInstructions = 'Couper le troisième fil.';
  } else if (numRed === 0) {
    tempInstructions = 'Couper le dernier fil.';
  } else {
    tempInstructions = 'Couper le quatrième fil.';
  }
}

setInstructions(tempInstructions);
};

const onWiresNbChange =(e)=>{
  setNumWires(parseInt(e.target.value, 10))
  setWires(Array(parseInt(e.target.value, 10)).fill(''))
}

return (
  <div>
    <h1>Module de fils</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Nombre de fils:
        <select value={numWires} onChange={(e) =>onWiresNbChange(e) }>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </label>
     
      <br />
   
      { wires.map((wire, index) => (
        <label key={index}>
          Fil {index + 1} :
          <select value={wire} onChange={(e) => setWires([...wires.slice(0, index), e.target.value, ...wires.slice(index + 1)])}>
            <option value="">Sélectionner une couleur</option>
            <option value="bleu">Bleu</option>
            <option value="rouge">Rouge</option>
            <option value="noir">Noir</option>
            <option value="jaune">Jaune</option>
            <option value="blanc">Blanc</option>
          </select>
          <br/>
        </label>
    
    
      ))}
      <br />
      <label>
        Numéro de série :
        <input type="text" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
      </label>
      <br />
      <button type="submit">Vérifier</button>
    </form>
    <div>
      <h2>Instructions:</h2>
      <p>{instructions}</p>
    </div>
  </div>
);
};


export default WireModuleComponent;