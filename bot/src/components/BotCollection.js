// BotCollection.js
import React from 'react';
import Bot from './Bot';

const BotCollection = ({ data, enlistedBots, onEnlist, onRemove, onShowSpecs, onDischarge }) => {
  if (!data || data.length === 0) {
    // If data is empty or undefined, display a loading message or fallback content
    return <p>Loading...</p>;
  }

  return (
    <div className='bot-card-container'>
      {data.map((bot) => (
        <Bot
          key={bot.id}
          bot={bot}
          enlisted={enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)}
          onEnlist={onEnlist}
          onRemove={onRemove}
          onShowSpecs={onShowSpecs} // Make sure this prop is passed
          onDischarge={onDischarge}
        />
      ))}
    </div>
  );
};

export default BotCollection;
