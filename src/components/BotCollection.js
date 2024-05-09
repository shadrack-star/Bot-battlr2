import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots
        {bots && bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            clickEvent={() => enlistBot(bot)}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;