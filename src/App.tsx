import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { CharacterForm } from "./Components/CharacterForm";
import { DungeonSelector } from "./Components/DungeonSelector";

// [ ]

export interface Stats {
  hp: Number;
  versatility: Number;
  armor: Number;
  avoidance: Number;
  passives: Number;
  external?: Number;
}

export default function App() {
  const [charStats, setCharStats] = useState<Stats>();
  const [selectedBoss, setSelectedBoss] = useState<any>();

  console.log(charStats);
  console.log(selectedBoss);

  return (
    <div className="text-lighter flex flex-col justify-center items-center ">
      <Navbar />
      <h1 className="text-4xl text-emphasis m-10">
        Find out if you're getting one-shot
      </h1>
      {!localStorage.stats && <CharacterForm setCharStats={setCharStats} />}
      {localStorage.stats && (
        <DungeonSelector
          setCharStats={setCharStats}
          bossSelect={setSelectedBoss}
        />
      )}
    </div>
  );
}
