// YourBotArmy.js
import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ enlistedBots = [], onDelete, onDischarge }) => {
  const handleDelete = (botId) => {
    onDelete(botId);
  };

  return (
    <div className="your-bot-army">
      
      {enlistedBots.length === 0 ? (
        <p>Add a Bot...</p>
      ) : (
        enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <Bot bot={bot} onRemove={handleDelete} onDischarge={onDischarge} enlisted />
          </div>
        ))
      )}
    </div>
  );
};

export default YourBotArmy;
