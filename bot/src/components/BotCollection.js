// components/BotCollection.js
import React, { useState } from 'react';
import Bot from './Bot';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';


const BotCollection = ({ bots, onEnlist }) => {
  const [selectedBot, setSelectedBot] = useState(null);
  const [filterClass, setFilterClass] = useState('');

  const handleSelectBot = (bot) => {
    setSelectedBot(bot);
  };

  const handleGoBack = () => {
    setSelectedBot(null);
  };

  const handleFilterClass = (event) => {
    setFilterClass(event.target.value);
  };

  const filteredBots = filterClass
    ? bots.filter((bot) => bot.bot_class === filterClass)
    : bots;

  return (
    <div>
      <h2>Bots Collection</h2>
      <select className="TOP" value={filterClass} onChange={handleFilterClass}>
        <option value="">All</option>
        <option value="Support">Support</option>
        <option value="Medic">Medic</option>
        <option value="Assault">Assault</option>
        <option value="Defender">Defender</option>
        <option value="Captain">Captain</option>
        <option value="Witch">Witch</option>
      </select>
      {selectedBot ? (
        <BotSpecs bot={selectedBot} onEnlist={onEnlist} onGoBack={handleGoBack} />
      ) : (
        <>
          <SortBar onSort={(sortKey) => console.log('Sort by', sortKey)} />
          <div className="bot-collection">
            {filteredBots.map((bot) => (
              <Bot key={bot.id} bot={bot} onSelect={handleSelectBot} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BotCollection;
