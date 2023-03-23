import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import CharacterForm from "./Components/CharacterForm";

// [ ]

export interface Stats {
  hp: Number;
  versatility: Number;
  armor: Number;
  avoidance: Number;
  passive: Number;
  external?: Number;
}

export default function App() {
  const [charStats, setCharStats] = useState<Stats>();

  return (
    <div className="text-slate-200 flex flex-col justify-center items-center ">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-80">
        <h1 className="text-4xl">Find out if you're getting one-shot</h1>
      </div>
      <CharacterForm setStats={setCharStats} />
    </div>
  );
}
