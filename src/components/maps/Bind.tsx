import { Link } from "react-router-dom";
import agent1 from "../../assets/Agent/agent1.png";
import agent2 from "../../assets/Agent/agent2.png";
import agent3 from "../../assets/Agent/agent3.png";
import agent4 from "../../assets/Agent/agent4.png";
import agent5 from "../../assets/Agent/agent5.png";
import agent6 from "../../assets/Agent/agent6.png";
import map from "../../assets/map/map2.png";
import Arrow from "../../assets/arrow.svg";
import downarrow from "../../assets/downarrow.svg";
const Bind = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-col items-center gap-3 ">
        <h1 className="text-xl text-white w-52 text-center font-semibold mb-2.5">
          Select Maps
        </h1>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent1}
            alt="logo"
            className=" w-[55px] h-[55px] rounded-full object-contain "
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Ares</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent2}
            alt="logo"
            className="  w-[55px] h-[55px] rounded-full object-contain"
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Odin</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent3}
            alt="logo"
            className="  w-[55px] h-[55px] rounded-full object-contain"
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Odin</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent4}
            alt="logo"
            className="  w-[55px] h-[55px] rounded-full object-contain"
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Odin</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent5}
            alt="logo"
            className=" w-[55px] h-[55px] rounded-full object-contain border-4 border-[#2E9BFA]"
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Odin</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <img
            src={agent6}
            alt="logo"
            className="  w-[55px] h-[55px] rounded-full object-contain"
          />
          <p className="text-[#B5B9BD] mb-4 text-lg">Odin</p>
        </div>
      </div>
      <div className="flex flex-col w-[1000px]">
        <div className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/home/details">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide / Valorant / Maps / Standard /</span>
          <span className="text-white font-normal">Bind</span>
        </div>

        <div className="flex flex-col gap-8 mt-16">
          <div className="flex items-center gap-3">
            <h1 className="text-5xl text-white font-semibold">Bind . </h1>
            <span className="text-3xl text-white font-thin mt-2">
              Valorant Map
            </span>
          </div>
          <p className="text-2xl text-white font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
          </p>
          <div className="flex gap-32 items-center">
            <h1 className="text-2xl text-white font-bold ">Map Legends</h1>
            <img src={downarrow} alt="logo" className="w-[25px] h-[15px]" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <span className="w-[30px] h-[30px] bg-[#64998C] rounded-lg "></span>
              <p className="text-2xl text-white font-thin">
                Defenders buy zone
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <span className="w-[30px] h-[30px] bg-[#9E7174] rounded-lg "></span>
              <p className="text-2xl text-white font-thin">
                Attackers buy zone
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <span className="w-[30px] h-[30px] bg-[#BC8C7C] rounded-lg "></span>
              <p className="text-2xl text-white font-thin">Spike plant zone</p>
            </div>
            <div className="flex gap-6 items-center">
              <span className="w-[40px] h-[7px] bg-[#FE4755] rounded-lg "></span>
              <p className="text-2xl text-white font-thin">
                Defenders Spawn barriers
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <span className="w-[40px] h-[10px] bg-[#1BE2B3] rounded-lg "></span>
              <p className="text-2xl text-white font-thin">
                Attackers Spawn barriers
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={map}
        alt="logo"
        className="w-[890px] h-[650px]  mt-16 object-contain "
      />
      <div className="flex flex-col justify-between p-3 bg-[#212426] w-[50px] h-[100px] mt-96 rounded-xl">
        <p className="text-3xl text-center font-semibold text-gray-600 hover:text-blue-600 hover:text-3xl bottom-0">
          +
        </p>
        <p className="text-3xl text-center font-semibold text-gray-600 hover:text-blue-600 hover:text-3xl bottom-0">
          -
        </p>
      </div>
    </div>
  );
};

export default Bind;
