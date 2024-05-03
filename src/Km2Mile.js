import React, { useState } from 'react';
import Buttons from './Buttons';

function Km2Mile() {
  const [miles, setMiles] = useState(0);
  const [kilometers, setKilometers] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [inputType, setInputType] = useState('miles');

  const handleMilesChange = (event) => {
    const value = parseFloat(event.target.value);
    setMiles(value);
    if (!flipped) {
      setKilometers(value / 0.621371);
    }
  };

  const handleKilometersChange = (event) => {
    const value = parseFloat(event.target.value);
    setKilometers(value);
    if (flipped) {
      setMiles(value * 0.621371);
    }
  };

  const onReset = () => {
    setMiles(0);
    setKilometers(0);
    setInputType('miles');
    setFlipped(false);
  };

  const onFlip = () => {
    setFlipped(!flipped);
    setInputType(inputType === 'miles' ? 'kilometers' : 'miles');
    if (inputType === 'miles') {
      setKilometers(miles / 0.621371);
    } else {
      setMiles(kilometers * 0.621371);
    }
  };

  return (
    <div>
      <h3>Kilometers to Miles</h3>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          value={miles}
          id="miles"
          type="number"
          step="0.01"
          onChange={handleMilesChange}
          disabled={inputType === 'kilometers'}
        />
      </div>
      <div>
        <label htmlFor="kilometers">Kilometers</label>
        <input
          value={kilometers}
          id="kilometers"
          type="number"
          step="0.01"
          onChange={handleKilometersChange}
          disabled={inputType === 'miles'}
        />
      </div>
      <h4>
        You want to convert from {inputType === 'miles' ? miles : kilometers} {inputType === 'miles' ? 'miles' : 'kilometers'} to:
      </h4>
      <Buttons onReset={onReset} onFlip={onFlip} />
    </div>
  );
}

export default Km2Mile;
