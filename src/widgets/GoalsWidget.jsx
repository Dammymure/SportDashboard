import React from 'react'

function GoalsWidget() {
  return (
    <div className="">
      <div className="flex items-center text-xs justify-between dark:text-slate-200 text-white">
        <p className="dark:text-slate-200 text-white">Total goals</p>
        <p className="dark:bg-slate-800 bg-slate-400 p-1 rounded ">
          Last month
        </p>
      </div>
      <h1 className="text-white">12</h1>
      <div>
        <div className="bg-slate-600 md:w-auto h-1">
          <div className="bg-pink-500 md:w-[50%] h-1"></div>
        </div>
      </div>
      <div className="flex justify-between text-xs dark:text-slate-200 text-white">
        <p>Total matches</p>
        <p>20</p>
      </div>
    </div>
  );
}

export default GoalsWidget