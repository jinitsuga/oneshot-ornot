import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'


export default function App() {
  return <div className="text-slate-200 font-['Roboto_Slab']"  >
    <Navbar />
    <div className='flex flex-col justify-center items-center h-80'>
      <h1 className='text-3xl'>Find out if you're getting one-shot</h1>

    </div>
    
  </div>
}

