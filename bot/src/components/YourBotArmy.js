import React from 'react';

const YourBotArmy = ({ enlistedBots = [], onDelete }) => {
  return (
    <div className="your-bot-army">
      <h3>Your Bot Army</h3>
      {enlistedBots.length === 0 ? (
        <p>Your bot army is empty.</p>
      ) : (
        enlistedBots.map((bot) => (
          <div key={bot.id} className="bot-card">
            
          </div>
        ))
      )}
    </div>
  );
};

export default YourBotArmy;
