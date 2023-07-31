// Bot.js
import React from 'react';

const Bot = ({ bot, onEnlist, onRemove, onShowSpecs, onDischarge, enlisted }) => {
const handleEnlist = () => {
onEnlist(bot);
};

const handleShowSpecs = () => {
onShowSpecs(bot);
};

const handleRemove = () => {
onRemove(bot.id);
};

// Define a function to call the onDischarge prop function
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
{/* Add an event listener to the red button that calls the handleDischarge function */}
<button onClick={handleDischarge}>X</button>
</div>
)}
</div>
);
};

export default Bot;