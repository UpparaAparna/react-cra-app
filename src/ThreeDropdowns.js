import React from 'react';
import Dropdown from './Dropdown';


const ThreeDropdowns = ({ dropdowns }) => {
  if (dropdowns.length !== 4) {
    return <div>ThreeDropdowns component requires exactly 3 dropdown configurations.</div>;
  }

  return (
    <div>
      {dropdowns.map((dropdown, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <Dropdown {...dropdown} />
        </div>
      ))}
    </div>
  );
};

export default ThreeDropdowns;