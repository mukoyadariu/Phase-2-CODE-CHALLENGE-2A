import React, { useState, useEffect, useCallback } from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import SortBar from './SortBar';
import BotSpecs from './BotSpecs';
import './App.css';
import FilterBar from './FilterBar';

function App() {
  const [data, setData] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  const [showBotSpecs, setShowBotSpecs] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data); // Initialize filteredData with all the data
      })
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

  // Function to filter data based on selected classes
  const applyFilters = useCallback((selectedClasses) => {
    if (selectedClasses.length === 0) {
      setFilteredData(data); // No filters selected, show all data
    } else {
      setFilteredData(data.filter((bot) => selectedClasses.includes(bot.bot_class)));
    }
  }, [data]);

  useEffect(() => {
    applyFilters([]); // Initial data, no filters
  }, [applyFilters]);

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      {!showBotSpecs && <SortBar data={filteredData} setData={setFilteredData} />}
      <FilterBar setFilters={applyFilters} /> {/* Pass the applyFilters function as a prop */}
      <YourBotArmy enlistedBots={enlistedBots} onDelete={handleRemove} onDischarge={handleDischarge} />
      {showBotSpecs && <BotSpecs bot={selectedBot} onEnlist={handleEnlist} onBack={handleHideBotSpecs} />}
      <BotCollection
        data={filteredData}
        enlistedBots={enlistedBots}
        onEnlist={handleEnlist}
        onRemove={handleRemove}
        onShowSpecs={handleShowBotSpecs}
        onDischarge={handleDischarge}
      />
    </div>
  );
}

export default App;
