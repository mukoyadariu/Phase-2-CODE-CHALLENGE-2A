import React from 'react';
import Bot from './Bot';

const YourBotArmy = ({ enlistedBots = [], onDelete, onDischarge }) => {
  const handleDelete = (botId) => {
    onDelete(botId);
  };

  const handleDischarge = (botId) => {
    onDischarge(botId);
  };

  return (
    <div className="your-bot-army">
      <h3>Your Bot Army</h3>
      {enlistedBots.length === 0 ? (
        <p>Your bot army is empty.</p>
      ) : (
        enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-card">
            <Bot bot={bot} onRemove={handleDelete} onDischarge={handleDischarge} enlisted />
          </div>
        ))
      )}
    </div>
  );
};

export default YourBotArmy;
