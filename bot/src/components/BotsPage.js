// BotsPage.js
import React, { useState, useEffect } from 'react';
import BotCollection from './BotCollection';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';


const BotsPage = ({ onEnlist }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, []);

  return (
    <div className='bot-specs'>
      <SortBar bots={bots} setBots={setBots} />
      <BotCollection bots={bots} onEnlist={onEnlist} />
      <YourBotArmy enlistedBots={bots} />
    </div>
  );
};

export default BotsPage;
