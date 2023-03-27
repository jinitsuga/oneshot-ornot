import React, { FC } from "react";
import { DungeonListItem } from "./DungeonListItem";
// import "./Dungeons/season1dungeons.json";

const dungeons = await import("./Dungeons/season1dungeons.json");

interface Props {
  bossSelect: any;
  setCharStats: Function;
}

const goBack = () => {
  localStorage.clear();
};

const DungeonSelector: FC<Props> = ({ bossSelect, setCharStats }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-4xl text-emphasis m-10">
        {" "}
        Select a boss from one of the dungeons!{" "}
      </h3>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCharStats(JSON.parse(localStorage.stats));
          goBack();
        }}
      >
        Back
      </button>
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
