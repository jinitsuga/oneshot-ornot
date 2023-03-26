import React, { FC } from "react";

interface DungeonData {
  dungeon: any;
}

const DungeonListItem: FC<DungeonData> = ({ dungeon }) => {
  const awway = Object.entries(dungeon);

  const bossesAbilities = Object.entries(awway[2][1]);

  console.log(bossesAbilities);

  bossesAbilities.map((item) => {
    const abilities = Object.entries(item[1]);
    console.log(
      abilities.map(
        (spell) => `${spell[0]} => ${spell[1].type}: ${spell[1].damage}`
      )
    );
  });

  return (
    <div className="flex flex-row items-center justify-between w-64 border-emphasis p-2 m-2 border-4">
      <button className="bg-yello">{dungeon.name}</button>
      <img className="w-20 h-12" src={dungeon.image} />
    </div>
  );
};

export { DungeonListItem };
