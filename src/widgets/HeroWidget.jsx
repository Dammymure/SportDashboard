import React from "react";
import Manu from "../data/icon/manU.svg";
import Chl from "../data/icon/chelsea.svg";

function HeroWidget() {
  return (
    <div>
      {" "}
      <div className="dark:bg-[#0f172a] bg-[#19213580]  w-auto h-44 rounded-xl md:p-4">
        <div className="flex text-xs text-white">
          <p className="bg-blue-500 px-2 rounded-2xl mr-5">Live</p>
          <p>Football / English Premier League</p>
        </div>
        <div className="flex justify-between space-x-10">
          <div className="flex flex-col align-middle content-center w-full ">
            <div className="flex content-between justify-between px-5">
              <img className="md:w-24 md:h-24 rounded-full" src={Manu} />
              <p className="flex my-auto font-bold text-white text-xl">VS</p>
              <img className="md:w-24 md:h-24 rounded-full" src={Chl} />
            </div>

            <div className="pt-[.4rem]">
              <p className="text-[.6rem] text-white">Half time / 45min</p>
              <div className="bg-slate-600 md:w-auto h-1">
                <div className="bg-pink-500 md:w-[50%] h-1"></div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex text-left items-center">
              <p className="text-white px-2">Manchester United</p>
              <span className=" text-pink-600 p-3 font-semibold bg-[#1e2433ad] rounded-xl">
                6
              </span>
              <span className="text-pink-600 font-semibold px-1">:</span>
              <span className=" text-pink-600 p-3 font-semibold bg-[#1e2433ad] rounded-xl">
                0
              </span>
              <p className="text-white px-2">Chelsea</p>
            </div>
            <div className="flex justify-between text-white">
              <div className="flex flex-col justify-center content-center align-middle ">
                <p className="text-xs dark:text-slate-400 content-center text-center text-slate-200">
                  Attacks
                </p>
                <div className="flex align-middle items-center justify-center">
                  <p>21</p>
                  <span className="border-2 border-blue-600 rounded-full p-2 w-3 h-3 mx-1"></span>
                  <p>5</p>
                </div>
              </div>
              <div className="flex flex-col justify-center content-center align-middle text-center">
                <p className="text-xs dark:text-slate-400 content-center text-center text-slate-200">
                  Dangerous Attacks
                </p>
                <div className="flex align-middle items-center justify-center">
                  <p>16</p>
                  <span className="border-2 border-blue-600 rounded-full p-2 w-3 h-3 mx-1"></span>
                  <p>2</p>
                </div>
              </div>
              <div className="flex flex-col justify-center content-center align-middle">
                <p className="text-xs content-center text-center dark:text-slate-400 text-slate-200">
                  Possession %
                </p>
                <div className="flex align-middle items-center justify-center">
                  <p>63</p>
                  <span className="border-2 border-blue-600 rounded-full p-2 w-3 h-3 mx-1"></span>
                  <p>37</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-[.5rem]">
              <p className="text-[.6rem] text-white">Off Target</p>
              <p className="text-[.6rem] text-white">On Target</p>
            </div>
            <div className="flex space-x-2 items-center text-white">
              <span className="text-xs">6</span>
              <div className="bg-blue-600 md:w-[100%] h-1">
                <div className="bg-pink-500 md:w-[50%] h-1"></div>
              </div>
              <span className="text-xs">2</span>
              <span className="text-xs">6</span>
              <div className="bg-blue-600 md:w-[100%] h-1">
                <div className="bg-pink-500 md:w-[50%] h-1"></div>
              </div>
              <span className="text-xs">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroWidget;
