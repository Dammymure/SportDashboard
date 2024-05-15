import React from 'react'
import Manu from "../data/icon/manU.svg";
import Chl from "../data/icon/chelsea.svg";

function LastGamesWidget() {
  return (
    <>
      <div className="dark:bg-[#0f172a] bg-[#19213580]  w-[100%] h-auto rounded-xl p-4 text-white">
        <div className="flex items-center justify-center">
          <img className="w-16" src={Manu} />
          <p>VS</p>
          <img className="w-16" src={Chl} />
        </div>
        <div className="flex items-center justify-around text-sm font-medium ">
          <p>Man United</p>
          <div className="flex items-center text-blue-500 text-lg">
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">2</p>
            <span className="  font-bold">:</span>
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">1</p>
          </div>
          <p>Liverpool</p>
        </div>
        <h2 className="font-medium">2023 Carabao Cup</h2>
        <p className="text-xs dark:text-slate-500 font-medium text-slate-200">
          Manchester, United Kingdom
        </p>
      </div>
      <div className="dark:bg-[#0f172a] bg-[#19213580]  w-[100%] h-auto rounded-xl p-4 text-white">
        <div className="flex items-center justify-center">
          <img className="w-16" src={Manu} />
          <p>VS</p>
          <img className="w-16" src={Chl} />
        </div>
        <div className="flex items-center justify-around text-sm font-medium ">
          <p>Man United</p>
          <div className="flex items-center text-blue-500 text-lg">
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">2</p>
            <span className="  font-bold">:</span>
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">1</p>
          </div>
          <p>Liverpool</p>
        </div>
        <h2 className="font-medium">2023 Carabao Cup</h2>
        <p className="text-xs dark:text-slate-500 font-medium text-slate-200">
          Manchester, United Kingdom
        </p>
      </div>
      <div className="dark:bg-[#0f172a] bg-[#19213580]  w-[100%] h-auto rounded-xl p-4 text-white">
        <div className="flex items-center justify-center">
          <img className="w-16" src={Manu} />
          <p>VS</p>
          <img className="w-16" src={Chl} />
        </div>
        <div className="flex items-center justify-around text-sm font-medium ">
          <p>Man United</p>
          <div className="flex items-center text-blue-500 text-lg">
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">2</p>
            <span className="  font-bold">:</span>
            <p className=" p-2 font-semibold bg-[#1e2433ad] rounded-lg">1</p>
          </div>
          <p>Liverpool</p>
        </div>
        <h2 className="font-medium">2023 Carabao Cup</h2>
        <p className="text-xs dark:text-slate-500 font-medium text-slate-200">
          Manchester, United Kingdom
        </p>
      </div>
    </>
  );
}

export default LastGamesWidget