import React, { FC } from "react";

interface DungeonData {
  dungeon: any;
  bossSelect: any;
}

const DungeonListItem: FC<DungeonData> = ({ dungeon, bossSelect }) => {
  const [dungeonSelected, setDungeonSelect] = React.useState<boolean>(false);

  const entries = Object.entries(dungeon);

  const bossesAndAbilities = Object.entries(entries[2][1]);
  // console.log(bossesAndAbilities);

  const bossNames = bossesAndAbilities.map((boss, id) => {
    const selectBoss = () => {
      bossSelect(boss);
    };

    // MIGHT NEED TO TURN THE <LI> INTO A <LI> ELEMENT WITH A BUTTON INSIDE FOR KEYBOARD ONLY NAV
    return (
      <li
        className="hover:cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          selectBoss();
        }}
        key={id}
      >
        {boss[0]}
      </li>
    );
  });

  return (
    <div className="flex flex-col items-center justify-between w-64 border-emphasis p-2 m-2 border-4">
      <div className="flex flex-row items-center justify-around w-full">
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
          className="bg-yello"
        >
          {dungeon.name}
        </button>
        <img className="w-20 h-12" src={dungeon.image} />
      </div>
      <ul>{bossNames}</ul>
    </div>
  );
};

export { DungeonListItem };
