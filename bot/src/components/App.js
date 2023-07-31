import React, { useState } from 'react';
import BotsPage from './BotsPage';
import YourBotArmy from './YourBotArmy';
import Bot from './Bot'
import css from './App.css'


function App() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const handleEnlist = (bot) => {
    setEnlistedBots((prevEnlistedBots) => [...prevEnlistedBots, bot]);
  };

  const handleDelete = (botId) => {
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );

    // If you have an API to delete the bot from the server, you can make the request here.
    // For now, we are just updating the state on the client-side.
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <BotsPage onEnlist={handleEnlist} />
      <YourBotArmy enlistedBots={enlistedBots} onDelete={handleDelete} />
    </div>
  );
}

export default App;
