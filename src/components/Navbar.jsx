import React from 'react'
import Sun from "../data/icon/sun.svg"
import Moon from "../data/icon/moon.svg"
import Manu from "../data/icon/manU.svg"
import { useStateContext } from "../context/ContextProvider";

function Navbar() {
 const { mode, setMode } = useStateContext();
 const Light = "light"
 const Dark = "dark"
  return (
    <div className="dark:border-b dark:border-slate-300/10">
      <div className="flex justify-between p-2 md:mx-6 relative ">
        <div className="flex align-middle my-auto">
          <h1 className="text-sm dark:text-slate-400 font-semibold">
            Manchester United
          </h1>
        </div>
        <div className="flex border-l border-slate-200 dark:border-slate-300/10 pl-6 gap-5">
          <button className="" onClick={() => setMode((prevMode) => !prevMode)}>
            {mode ? (
              <img className="w-5 h-5 animate-pulse duration-500" src={Sun} />
            ) : (
              <img className=" w-5 h-5  duration-500" src={Moon} />
            )}
          </button>
          <button>
            <img className="w-6 h-6" src={Manu} />
          </button>
        </div>
      </div>
      {/* <div className="absolute right-16 ">
       <img src={Sun}/>
       <h3>Dark</h3>
       </div> */}
    </div>
  );
}

export default Navbar