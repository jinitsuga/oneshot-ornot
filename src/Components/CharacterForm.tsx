import React from "react";
import { Stats } from "../App";

export default function CharacterForm(setStats: any) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4 font-['Poppins', sans-serif] border p-2
    rounded w-[500px]"
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
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="versa"
        >
          Versatility:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="armor"
        >
          Armor:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="armor"
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="avoidance"
        >
          Avoidance:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="number"
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="passive"
        >
          Passives from talents/class:
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="passive"
          ></input>
        </label>
        <label
          className="flex flex-col justify-center items-center text-xl m-2"
          htmlFor="external"
        >
          External/Personal (optional):
          <input
            className="text-slate-900 text-xl rounded p-2 m-2"
            type="external"
          ></input>
        </label>
        <button
          type="button"
          className="text-xl text-gray-900 bg-slate-100 p-2 m-2 rounded"
        >
          Set stats
        </button>
      </form>
    </div>
  );
}
