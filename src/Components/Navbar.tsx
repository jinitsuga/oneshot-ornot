import React from "react";


export default function Navbar () {

    return <nav className="flex text-xl h-16 flex-row bg-gray-800 justify-around items-center justify-self-start w-full">
        <li className="list-none">
            <ul>Home</ul>
        </li>
        <div>
            <button>About</button>
        </div>
    </nav>
}