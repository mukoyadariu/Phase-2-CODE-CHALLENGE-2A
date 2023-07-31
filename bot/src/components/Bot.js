import React from 'react';

const Bot = ({ bot, onEnlist, onRemove, onShowSpecs, onDischarge, enlisted }) => {
  const handleEnlist = () => {
    onEnlist(bot);
  };

  const handleShowSpecs = () => {
    if (typeof onShowSpecs === 'function') {
      onShowSpecs(bot);
    }
  };

  const handleRemove = () => {
    onRemove(bot.id);
  };

  const handleDischarge = () => {
    onDischarge(bot.id);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>Catchphrase: {bot.catchphrase}</p>
      {enlisted ? (
        <div>
          <button onClick={handleShowSpecs}>Show Specs</button>
          <button onClick={handleRemove}>Remove</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEnlist}>Enlist</button>
          <button onClick={handleDischarge} style={{ color: 'red' }}>
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Bot;
