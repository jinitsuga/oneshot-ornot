import React, { FC } from "react";
import { DungeonListItem } from "./DungeonListItem";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

interface Props {
  bossSelect: any;
}

const DungeonSelector: FC<Props> = ({ bossSelect }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl text-emphasis m-10"> Select a dungeon </h3>
      <form>
        <ul>
          <li>
            <DungeonListItem
              bossSelect={bossSelect}
              dungeon={dungeons.academy}
            />
          </li>
          <li>
            <DungeonListItem bossSelect={bossSelect} dungeon={dungeons.RLP} />
          </li>
        </ul>
      </form>
    </div>
  );
};

export { DungeonSelector };
