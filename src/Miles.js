// Miles.js
import React from 'react';

function Miles({ flipped, onChange, amount }) {
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value, 10); // Parse integer value
    const convertedInput = flipped ? Math.round(inputValue / 0.621371) : inputValue;
    onChange(convertedInput, 'miles'); // Update the input type to 'miles'
  };

  const convertedValue = flipped ? Math.round(amount * 0.621371) : amount;

  return (
    <div>
      <label htmlFor="miles">Miles</label>
      <input
        value={convertedValue} // Display integer value without decimals
        id="miles"
        name="miles"
        placeholder="Miles"
        type="number"
        onChange={handleChange}
        disabled={flipped === false} // Disabled when flipped is true
      />
    </div>
  );
}

export default Miles;
