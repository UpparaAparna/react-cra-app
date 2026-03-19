import React, { useState } from 'react';


const Dropdown = ({ options, onChange, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const[ open , setOpen] = useState(false);

  const handleChange = (Option) => {
    setSelectedOption(Option);
    onChange(Option);
    setOpen(false);
  };

  return (
    <div>
     <div>
      <button onClick={() => setOpen(!open)} style={{ padding: '10px', fontSize: '16px' }}>
        {selectedOption ? selectedOption.label : placeholder}
      </button> 
     </div>
     {selectedOption ? selectedOption.label : placeholder}
     {open && (
        <div style={{ border: '1px solid #ccc', marginTop: '5px', width: '200px' }}>
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleChange(option)}
              style={{ padding: '10px', cursor: 'pointer' }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
