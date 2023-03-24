import React, { FC } from "react";
import { DungeonListItem } from "./DungeonItem";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

const DungeonSelector: FC = () => {
  return (
    <div>
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
