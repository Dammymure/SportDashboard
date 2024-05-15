import React, { useState } from "react";
import { items } from "../data/Items";
import { useStateContext } from "../context/ContextProvider";
import Arrow from "../data/icon/arrow.svg";
import Manu from "../data/icon/manU.svg";
import Epl from "../data/icon/epl.png";
import EplW from "../data/icon/eplwhite.png";

function Sidebar() {
  const { activeMenu, setActiveMenu, mode } = useStateContext();
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const primaryColor = "#7e22ce";

  return (
    <div className="py-2 h-screen overflow-hidden md:hover:overflow-auto border-slate-900/10  dark:bg-[#0f172a] dark:border-r dark:border-slate-300/10">
      <span
        className={`w-[22px] h-[22px] font-bold cursor-pointer absolute -right-2.5 top-6 duration-500 ${
          activeMenu ? "" : "rotate-180"
        } `}
        onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      >
        <img className="" src={Arrow} />
      </span>
      <div className={`${activeMenu ? " pl-6" : "flex justify-center"}`}>
        <div className="flex   items-center ">
          {mode ? (
            <img className="w-8 flex-shrink-0 " src={EplW} />
          ) : (
            <img className="w-8 flex-shrink-0 " src={Epl} />
          )}
        </div>
        {activeMenu ? (
          <h4 className="text-xs dark:text-slate-300">Premier League</h4>
        ) : (
          ""
        )}
      </div>
      <div className="">
        {items.map((item) => (
          <div className="flex flex-col" key={item.title}>
            <p
              className={`pt-[8px] text-slate-700 dark:text-slate-500  text-sm px-  ${
                activeMenu ? "pl-6" : "self-center"
              }`}
            >
              {item.title}
            </p>
            {item.links.map((link) => (
              <div
                className={`flex items-center space-x-[12px] py-[6px] hover:bg-gray-200 dark:hover:bg-slate-800/50 rounded-sm border-r-4 border-l-4 border-transparent hover:border-r-[#7e22ce] text-slate-700  ${
                  activeMenu ? "px-6" : "p-3 "
                } font-medium`}
                to={`${link.name}`}
                key={link.name}
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredLink(link.name);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredLink(null);
                }}
              >
                <span className="flex-shrink-0 ">
                  <img
                    className="w-[20px] opacity-70 flex-shrink-0 "
                    src={`${link.icon}`}
                  />
                </span>
                {activeMenu ? (
                  <div>
                    <span className="capitalize flex-shrink-0 text-[14px] dark:text-slate-400">
                      {link.name}
                    </span>
                  </div>
                ) : (
                  ""
                )}

                {!activeMenu && hoveredLink === link.name ? (
                  <span
                    className={` duration-300 absolute m-0 ${
                      activeMenu ? "pl-44" : "pl-7"
                    }  py-1`}
                  >
                    {/* opacity-0 hover:opacity-100 */}
                    {/* <span className="flex justify-center align-middle my-auto bg-[#d4d4d4c7] dark:bg-slate-700/50 capitalize text-sm font-normal dark:text-slate-400">
                      {link.name}
                    </span> */}
                    <div id="talkbubble" class="border border-slate-600 ">
                      <div class="text-slate-400 font-normal text-sm capitalize">
                        {link.name}
                      </div>
                    </div>
                  </span>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="">
        <div className="flex justify-center">
          <img
            className={`${
              activeMenu ? "md:w-16 md:h-16" : "md:w-8 md:h-8"
            } rounded-full`}
            src={Manu}
          />
        </div>
        {activeMenu ? (
          <div className="text-center font-medium text-slate-700 dark:text-slate-400">
            <p className="text-xs">Manchester United F.C</p>
            <p className="text-xs">Erik Ten Hag</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Sidebar;
