import React from "react";
import Bot from "./Bot";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard(props) {
  const {bot,action,removeCardPermanently} = props
  function handleClick (){
    console.log("add code to connect event listener ")
    action(bot)
  }
  function handleDelete(e){
    console.log("click on x")
    e.stopPropagation()
    removeCardPermanently(bot)
  }
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={props.bot.id}
        onClick={handleClick}
      >
        <div className="image">
          <img alt="oh no!" src={props.bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {props.bot.name}
            <i className={botTypeClasses[props.bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{props.bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {props.bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {props.bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {props.bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
            </div>
            <button>delete</button>
          </span>
          
        </div>
      </div>
    </div>
  );
}

export default BotCard;