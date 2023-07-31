import React, { useState, useEffect } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import SortBar from './SortBar';
import BotSpecs from './BotSpecs';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [showBotSpecs, setShowBotSpecs] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  const handleEnlist = (bot) => {
    if (!enlistedBots.some((enlistedBot) => enlistedBot.bot_class === bot.bot_class)) {
      setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
    }
  };

  const handleRemove = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );

    // Delete the bot from the backend
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => console.log('Bot removed and discharged:', data))
      .catch((error) => console.error('Error removing and discharging bot:', error));
  };

  const handleShowBotSpecs = (bot) => {
    setSelectedBot(bot);
    setShowBotSpecs(true);
  };

  const handleHideBotSpecs = () => {
    setSelectedBot(null);
    setShowBotSpecs(false);
  };

  const handleDischarge = (botId) => {
    handleRemove(botId); // Call handleRemove to remove the bot from the frontend and backend
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      {!showBotSpecs && <SortBar data={data} setData={setData} />}
      <YourBotArmy
        enlistedBots={enlistedBots}
        onDelete={handleRemove}
        onDischarge={handleDischarge} // Pass handleDischarge to YourBotArmy
      />
      {showBotSpecs && (
        <BotSpecs bot={selectedBot} onEnlist={handleEnlist} onBack={handleHideBotSpecs} />
      )}
      <BotCollection
        data={data}
        enlistedBots={enlistedBots}
        onEnlist={handleEnlist}
        onRemove={handleRemove}
        onShowSpecs={handleShowBotSpecs}
        onDischarge={handleDischarge} // Pass handleDischarge to BotCollection
      />
    </div>
  );
}

export default App;
