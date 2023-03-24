import React, { FC } from "react";

interface DungeonData {
  dungeon: any;
}

const DungeonListItem: FC<DungeonData> = ({ dungeon }) => {
  return (
    <div className="flex flex-row items-center justify-between w-64 bg-yello border-purp border-4">
      <button className="bg-yello">{dungeon.name}</button>
      <img className="w-20 h-12" src={dungeon.image} />
    </div>
  );
};

export { DungeonListItem };
