import React from 'react'
import prof1 from "../data/profileImage/profile1.jpg"

function FollowersWidget() {
  return (
    <div>
      <div className="dark:bg-[#0f172a] bg-[#19213580] w-auto  rounded-xl p-3">
        <div className="flex justify-between text-xs">
          <p className="text-slate-300">Notifications</p>
          <p className="text-blue-700">See all</p>
        </div>

        <div>
          <div className="flex justify-around items-center py-2 border-b-[1px] border-slate-400 dark:border-slate-600">
            <div>
              <img className=" w-8 h-8 rounded-2xl" src={prof1} />
            </div>
            <div>
              <h1 className="text-white text-sm">Dolly Krista</h1>
              <p className="dark:text-slate-400 text-slate-300 text-xs">
                Followed this team
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-200">4:20pm</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center py-2 border-b-[1px] border-slate-400 dark:border-slate-600">
            <div>
              <img className=" w-8 h-8 rounded-2xl" src={prof1} />
            </div>
            <div>
              <h1 className="text-white text-sm">Dolly Krista</h1>
              <p className="dark:text-slate-400 text-slate-300 text-xs">
                Followed this team
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-200">4:20pm</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center py-2 border-b-[1px] border-slate-400 dark:border-slate-600">
            <div>
              <img className=" w-8 h-8 rounded-2xl" src={prof1} />
            </div>
            <div>
              <h1 className="text-white text-sm">Dolly Krista</h1>
              <p className="dark:text-slate-400 text-slate-300 text-xs">
                Followed this team
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-200">4:20pm</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-around items-center pt-2 ">
            <div>
              <img className=" w-8 h-8 rounded-2xl" src={prof1} />
            </div>
            <div>
              <h1 className="text-white text-sm">Dolly Krista</h1>
              <p className="dark:text-slate-400 text-slate-300 text-xs">
                Followed this team
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-200">4:20pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FollowersWidget