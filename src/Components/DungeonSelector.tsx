import React, { FC } from "react";
import { DungeonListItem } from "./DungeonItem";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

const DungeonSelector: FC = () => {
  return (
    <div>
      <DungeonListItem dungeon={dungeons.RLP} />
      <DungeonListItem dungeon={dungeons.academy} />
      <form>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </form>
    </div>
  );
};

export { DungeonSelector };
