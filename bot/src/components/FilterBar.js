// FilterBar.js
import React, { useState, useEffect } from 'react';

const FilterBar = ({ setFilters }) => {
  const [selectedClasses, setSelectedClasses] = useState([]);

  const handleCheck = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedClasses((prevSelectedClasses) => [...prevSelectedClasses, value]);
    } else {
      setSelectedClasses((prevSelectedClasses) =>
        prevSelectedClasses.filter((cls) => cls !== value)
      );
    }
  };

  useEffect(() => {
    setFilters(selectedClasses);
  }, [selectedClasses, setFilters]);

  return (
    <div className='moto'>
      <h3>Filter by Class:</h3>
      <label>
        <input
          type="checkbox" 
          value="Support"
          checked={selectedClasses.includes('Support')}
          onChange={handleCheck}
        />
        Support
      </label>
      <label>
        <input
          type="checkbox"
          value="Medic"
          checked={selectedClasses.includes('Medic')}
          onChange={handleCheck}
        />
        Medic
      </label>
      <label>
        <input
          type="checkbox"
          value="Assault"
          checked={selectedClasses.includes('Assault')}
          onChange={handleCheck}
        />
        Assault
      </label>
      <label>
        <input
          type="checkbox"
          value="Defender"
          checked={selectedClasses.includes('Defender')}
          onChange={handleCheck}
        />
        Defender
      </label>
      <label>
        <input
          type="checkbox"
          value="Captain"
          checked={selectedClasses.includes('Captain')}
          onChange={handleCheck}
        />
        Captain
      </label>
      <label>
        <input
          type="checkbox"
          value="Witch"
          checked={selectedClasses.includes('Witch')}
          onChange={handleCheck}
        />
        Witch
      </label>
    </div>
  );
};

export default FilterBar;
