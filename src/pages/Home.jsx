import React from "react";

import HeroWidget from "../widgets/HeroWidget";
import LastGamesWidget from "../widgets/LastGamesWidget";
import UpcomingGamesWidget from "../widgets/UpcomingGamesWidget";
import GoalsWidget from "../widgets/GoalsWidget";
import FollowersWidget from "../widgets/FollowersWidget";

function Home() {
  return (
    <div className="bg-[#eeeded] h- dark:bg-gradient-to-r from-[#111b31] to-[#162241]  ">
      <div className="flex  h-screen overflow-auto">
        <div className="bg- md:w-[75%] md:h-screen md:p-4">
          <HeroWidget />
          <div className="flex justify-between pb-2 pt-4 font-medium dark:text-white">
            <h2 className="text-xs">Last games</h2>
            <p className="text-xs text-blue-600">See more</p>
          </div>
          <div className="bg- w-auto h-48 gap-4 flex">
            <LastGamesWidget />
          </div>
          <div className="flex justify-between pb-2 pt-4 font-medium dark:text-white">
            <h2 className="text-xs">Upcoming games</h2>
            <p className="text-xs text-blue-600">See more</p>
          </div>
          <UpcomingGamesWidget />
        </div>
        <div className="bg- md:w-[25%] h-screen space-y-4 p-4">
          <div className="bg-black w-auto h-48 rounded-xl "></div>
          <div className=" dark:bg-[#0f172a] bg-[#19213580]   w-auto rounded-xl p-3 text-slate-400 content-center justify-center my-auto">
            <GoalsWidget />
          </div>
          <div>
            <FollowersWidget />
          </div>
        </div>
      </div>
    </div>
  );

  // const gridSize = 12;

  // const generateGrid = () => {
  //   const gridItems = [];

  //   for (let i = 0; i < gridSize * gridSize; i++) {
  //     gridItems.push(
  //       <div key={i} className="w-20 h-20 bg-transparent hover:border border-[#ffffff42] duration-100 m-[1px]">

  //       </div>
  //     );
  //   }

  //   return gridItems;
  // };

  // return (
  //   <div className="min-h-screen w-full flex bg-[#0f172a]">
  //     <div className="grid grid-cols-12 xl:grid-cols-5 bg-transparent rounded-lg">
  //       {generateGrid()}
  //       <div className="absolute">Hello</div>
  //     </div>
  //   </div>
  // );
}

export default Home;
