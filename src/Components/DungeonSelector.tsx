import React, { FC } from "react";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

const DungeonSelector: FC = () => {
  return (
    <div>
      <form>
        <ul>
          <li>
            <button>{dungeons.RLP.name}</button>
            <img />
          </li>
          <li>
            <button>{dungeons.academy.name}</button>
            <img />
          </li>
        </ul>
      </form>
    </div>
  );
};

export { DungeonSelector };
