// Kilometers.js
import React from 'react';

function Kilometers({ flipped, onChange, amount }) {
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value, 10); // Parse integer value
    const convertedInput = flipped ? Math.round(inputValue * 0.621371) : inputValue;
    onChange(convertedInput, 'kilometers'); // Update the input type to 'kilometers'
  };

  const convertedValue = flipped ? Math.round(amount / 0.621371) : amount;

  return (
    <div>
      <label htmlFor="kilometers">Kilometers</label>
      <input
        value={convertedValue} // Display integer value without decimals
        id="kilometers"
        name="kilometers"
        placeholder="Kilometers"
        type="number"
        onChange={handleChange}
        disabled={flipped === true} // Disabled when flipped is false
      />
    </div>
  );
}

export default Kilometers;
