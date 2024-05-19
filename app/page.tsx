"use client"

import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleMouseEnter = () => {
    const maxX = window.innerWidth - 1000;
    const maxY = window.innerHeight - 600;
    const newX = getRandomInt(-maxX, maxX);
    const newY = getRandomInt(-maxY, maxY);
    setPosition({ x: newX, y: newY });
  };

  return (
    <main className="relative h-screen w-full flex items-center justify-center flex-col gap-y-2">
      <h1 className="text-[#FF0080] font-bold text-2xl md:text-4xl transition-all">
        {state ? "Will you go out with me?" : "Yay, see you on 20th!"}
      </h1>

      <div>
        <video
          autoPlay
          muted
          loop
          className={`transition-all translate-x-[-25px] ${state ? "opacity-100 block" : "hidden opacity-0"}`}
        >
          <source src="/1.webm" type="video/webm" />
        </video>
 
        <video
          autoPlay
          muted
          loop
          className={`transition-all translate-x-[-25px] ${state ? "opacity-0 hidden" : "block opacity-100"}`}
        >
          <source src="/2.webm" type="video/webm" />
        </video>
      </div>
      
      <div className="relative flex flex-row gap-x-8 mt-8">
        <button 
          className="w-[175px] translate-x-[-100px] rounded-full px-4 py-2 font-semibold text-white bg-[#FF0080] shadow-md shadow-black/5"
          onClick={() => {
            setState(false);
          }}
        >
          Yes
        </button>
        {
          state && (
            <button 
              className={`absolute translate-x-[100px] w-[175px] rounded-full px-4 py-2 font-semibold border-2 border-[#FF0080] bg-white/15 shadow-md shadow-black/5 text-[#FF0080]`}
              style={{ left: position.x, top: position.y }}
              // onClick={() => {
              //   setState(true);
              // }}
              onMouseEnter={handleMouseEnter}
            >
              No
            </button>
          )
        }
      </div>
    </main>
  );
}
