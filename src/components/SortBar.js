import React from 'react';

const SortBar = ({ data, setData }) => {
  const handleSort = (property) => {
    const sortedData = [...data].sort((a, b) => a[property] - b[property]);
    setData(sortedData);
  };

  return (
    <div className="sort-bar">
      <button onClick={() => handleSort('health')}>Sort by Health</button>
      <button onClick={() => handleSort('damage')}>Sort by Damage</button>
      <button onClick={() => handleSort('armor')}>Sort by Armor</button>
      <h2>YOUR BOT ARMY</h2>
    </div>
  );
};

export default SortBar;