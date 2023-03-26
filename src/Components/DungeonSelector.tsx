import React, { FC } from "react";
import { DungeonListItem } from "./DungeonListItem";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

const DungeonSelector: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl text-emphasis m-10"> Select a dungeon </h3>
      <form>
        <ul>
          <li>
            <DungeonListItem dungeon={dungeons.academy} />
          </li>
          <li>
            <DungeonListItem dungeon={dungeons.RLP} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export { DungeonSelector };
