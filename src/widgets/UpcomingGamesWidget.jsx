import React from 'react'

function UpcomingGamesWidget() {
  return (
    <>
      <div className="dark:bg-[#0f172a] bg-[#19213580]  md:w-[100%] md:h-48 rounded-xl dark:text-slate-400 text-slate-200 font-medium">
        <div>
          <div className="dark:bg-[#192135] bg-[#1921353a]  flex w-auto items-center text-sm rounded-xl py-1 px-6 text-left ">
            <h1 className="w-[15%] ">DATE</h1>
            <h1 className="w-[10%] px-2">TIME</h1>
            <h1 className="w-[30%] px-2">CLUBS</h1>
            <h1 className="w-[25%] px-2">LOCATION</h1>
            <h1 className="w-[20%] px-2">TYPE OF MATCH</h1>
          </div>
          <div className="flex w-auto items-center text-sm  px-4 mx-2 border-b border-slate-700">
            <p className="w-[15%] border-r border-slate-700 py-2 ">
              Jul 12, 2022
            </p>
            <p className="w-[10%] border-r border-slate-700 py-2 px-2">12:00</p>
            <p className="w-[30%] border-r border-slate-700 py-2 px-2">
              Chelsea - Man United
            </p>
            <p className="w-[25%] border-r border-slate-700 py-2 px-2">
              London, England
            </p>
            <p className="w-[20%] py-2 px-2">Premier League</p>
          </div>
          <div className="flex w-auto items-center text-sm  px-4 mx-2 border-b border-slate-700">
            <p className="w-[15%] border-r border-slate-700 py-2 ">
              Jul 12, 2022
            </p>
            <p className="w-[10%] border-r border-slate-700 py-2 px-2">12:00</p>
            <p className="w-[30%] border-r border-slate-700 py-2 px-2">
              Chelsea - Man United
            </p>
            <p className="w-[25%] border-r border-slate-700 py-2 px-2">
              London, England
            </p>
            <p className="w-[20%] py-2 px-2">Premier League</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingGamesWidget