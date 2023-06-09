import React, { FC } from "react";
import { Stats } from "../App";

interface Props {
  setCharStats: Function;
}

const CharacterForm: FC<Props> = ({ setCharStats }) => {
  const [stats, setStats] = React.useState<Stats>({
    hp: 0,
    versatility: 0,
    armor: 0,
    avoidance: 0,
    passives: 0,
    external: 0,
  });

  function updateStats(e: any) {
    setStats((oldstats) => {
      return { ...oldstats, [e.target.name]: e.target.value };
    });
  }

  return (
    <div
      className="flex flex-col justify-center  items-center gap-2 font-['Poppins', sans-serif] border-emphasis
      border-2 p-2 rounded w-[500px]"
    >
      <h3 className="text-2xl">Add your character's info:</h3>
      <form className="flex flex-col items-center justify-center font-['Roboto_Slab']">
        <label
          className="flex flex-col justify-center items-center m-2 text-xl"
          htmlFor="hp"
        >
          HP:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="hp"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.hp}
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="versa"
        >
          Versatility (%):
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="versatility"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.versatility}
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="armor"
        >
          % reduction from Armor:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="armor"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.armor}
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="avoidance"
        >
          Avoidance (%):
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="avoidance"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.avoidance}
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="passive"
        >
          Passive % reductions from talents/class:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="passives"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.passives}
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="external"
        >
          External/Personal % reduction (optional):
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
            name="external"
            onChange={updateStats}
            value={localStorage.stats && localStorage.stats.external}
          ></input>
        </label>
        <button
          type="button"
          className="text-xl text-gray-900 bg-slate-100 p-2 m-2 rounded"
          onClick={(e) => {
            e.preventDefault();
            localStorage.setItem("stats", JSON.stringify(stats));
            if (stats.hp > 1 && stats.armor > 1) {
              setCharStats(stats);
            }
          }}
        >
          Set stats
        </button>
      </form>
    </div>
  );
};
export { CharacterForm };
