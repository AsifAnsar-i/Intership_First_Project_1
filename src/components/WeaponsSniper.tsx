import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import CARD1 from "../assets/HomeCard/weapon.svg";
import mouseicon from "../assets/mouseicon.svg";
import agentbody from "../assets/Agent/agentbody.png";
import gun1 from "../assets/guns/sniper1.png";
import gun2 from "../assets/guns/sniper2.png";
import gun3 from "../assets/guns/sniper3.png";
import basegun from "../assets/guns/gun1.png"

import damage from "../assets/guns/damage.svg";
const WeaponsSniper = () => {
  return (
    <div className="flex justify-center gap-10">
      <div className="flex flex-col items-center gap-3 -ml-72">
        <h1 className="text-xl text-white font-semibold mb-2.5">
          Select Sidearms
        </h1>
        <div className="flex flex-col gap-1 items-center">
          <div className="bg-[#1A1C20] w-[70px] h-[70px] rounded-full">
            <img
              src={gun1}
              alt="logo"
              className="w-[50px] h-[50px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-4"
            />
          </div>
          <p className="text-[#B5B9BD] mb-4 text-lg">Marshal</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="bg-[#1A1C20] w-[70px] h-[70px] border-4 border-[#2E9BFA]  rounded-full">
            <img
              src={gun2}
              alt="logo"
              className="w-[50px] h-[50px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-4"
            />
          </div>
          <p className="text-[#B5B9BD] mb-4 text-lg">Outlaw</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <div className="bg-[#1A1C20] w-[70px] h-[70px] rounded-full">
            <img
              src={gun3}
              alt="logo"
              className="w-[50px] h-[50px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-4"
            />
          </div>
          <p className="text-[#B5B9BD] mb-4 text-lg">Operator</p>
        </div>
      </div>
      <div className="max-w-[1444px] w-full px-4">
        <h3 className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/home">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide / Valorant /</span>
          <span className="text-white font-normal">Weapons</span>
        </h3>
        <div className="flex flex-col gap-2.5 p-7  bg-[#1A1C1F] h-[200px] md:h-[175px] rounded-t-2xl">
          <div className="flex items-center gap-4 ">
            <img
              src={CARD1}
              alt="logo"
              className=" w-[40px] h-[40px] object-cover rounded-lg"
            />
            <span className="text-white text-2xl">Weapons</span>
          </div>
          <p className="text-white ">
            Check out Classic headshot % by range, primary and alt fire modes
            and rates of fire, magazine capacity, wall penetration rating
          </p>
          <div className="flex items-start gap-6 mt-4">
            <Link to="/weapons">
              <p className="text-xl text-[#7D8185]"> Sidearms</p>
            </Link>
            <Link to="/smgs">
              <p className=" text-xl text-[#7D8185]">SMGs</p>
            </Link>
            <Link to="/shotguns">
              <p className="text-xl text-[#7D8185]">Shotguns</p>
            </Link>
            <Link to="/rifles">
              <p className="text-xl text-[#7D8185]">Rifles</p>
            </Link>
            <Link to="/snipers">
              <p className="font-semibold text-2xl text-white border-b-4 pb-2 border-[#2E9BFA]">
                Snipers
              </p>
            </Link>
            <Link to="/heavy">
              <p className="text-xl text-[#7D8185]">Heavy</p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col bg-[#0c0c0c] sm:h-[1600px] md:h-[1440px] p-10  rounded-b-2xl  gap-x-4 gap-y-4">
          <div className="flex items-start gap-6 ">
            <Link to="/home/details">
              <p className="flex font-semibold text-2xl items-center text-white border-b-4 pb-2 border-[#2E9BFA]">
                <img src={mouseicon} alt="logo" className="w-[32px] h-[32px]" />
                <p>Primary</p>
              </p>
            </Link>
            <Link to="/teamdeath" className="flex">
              <img src={mouseicon} alt="logo" className="w-[32px] h-[32px]" />
              <p className=" text-xl text-[#7D8185]">Alt. Fire</p>
            </Link>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <img
                src={agentbody}
                alt="logo"
                className="w-[800px] h-[500px] rounded-3xl p-2"
              />
              <div className="p-2 flex items-center gap-16">
                <div className="flex items-center gap-4">
                  <p className="text-xl text-[#7D8185]">Classic</p>
                  <p className="text-white font-semibold text-xl">Primary</p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xl text-[#7D8185]">Fire Mode</p>
                  <p className="text-white font-semibold text-xl">
                    Semi-Automatic
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-xl text-[#7D8185]">Fire Rate</p>
                  <p className="text-white font-semibold text-xl">
                    6.57 <span className="text-[#7D8185]">Rounds/Sec</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col p-2">
              <div className="bg-[#1A1C1F] w-[420px] h-[200px] rounded-3xl flex flex-col border-4 border-blue-400  z-30 ">
                <img
                  src={basegun}
                  alt="logo"
                  className="w-[130px] h-[90px] rounded-2xl top-0 bottom-0 left-0 right-0 m-auto mt-10"
                />
                <p className="text-white text-2xl text-center mb-10">Classic</p>
              </div>
              <div className="flex flex-col  h-[820px] w-[420px] rounded-b-3xl bg-[#1A1C1F] -mt-4">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex flex-col gap-4 px-6 mt-5 text-2xl">
                    <p className="text-white text-2xl ">Pricing</p>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Cost</p>
                      <p className="text-white text-2xl font-semibold">150</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-6 mt-5 text-2xl">
                    <p className="text-white text-2xl ">Primary Fire</p>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Fire-Mode</p>
                      <p className="text-white text-2xl font-semibold">
                        Semi-Automatic
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Rate of Fire</p>
                      <p className="text-white text-2xl font-semibold">
                        6.76<span className="text-[#7D8185]">Rounds/Sec</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-6 mt-5 text-2xl">
                    <p className="text-white text-2xl ">Ail. Fire</p>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Fire Mode</p>
                      <p className="text-white text-2xl font-semibold justify-end items-center">
                        3-Round Burst, spread increase
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Rate of Fire</p>
                      <p className="text-white text-2xl font-semibold">
                        2.22<span className="text-[#7D8185]">Rounds/Sec</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 px-6 mt-5 text-2xl">
                    <p className="text-white text-2xl ">Other Details</p>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Magazine Capacity</p>
                      <p className="text-white text-2xl font-semibold">12</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Wall Penetration</p>
                      <p className="text-white text-2xl font-semibold">Low</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Reload Speed</p>
                      <p className="text-white text-2xl font-semibold">Low</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-[#7D8185]">Drop off Distance</p>
                      <p className="text-white text-2xl font-semibold">Low</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1C1F] rounded-3xl h-[260px] w-[420px] mt-4 ">
                <div className="flex justify-between p-5">
                  <div className="flex flex-col justify-between">
                    <p className="text-center mb-3 text-xl text-[#7D8185]">
                      0-30
                    </p>
                    <div className="flex">
                      <img
                        src={damage}
                        alt="logo"
                        className="w-[90px] h-[170px]"
                      />
                      <div className="flex flex-col justify-between">
                        <p className="text-[#2E9BFA] text-xl"> - 78</p>
                        <p className="text-[#266AC6] text-xl mb-3"> - 32</p>
                        <p className="text-[#B5B9BD] text-xl mb-2.5"> - 23</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between ">
                    <p className="text-center mb-3 text-xl text-[#7D8185]">
                      0-30
                    </p>
                    <div className="flex">
                      <img
                        src={damage}
                        alt="logo"
                        className="w-[90px] h-[170px]"
                      />
                      <div className="flex flex-col justify-between ">
                        <p className="text-[#2E9BFA] text-xl"> - 78</p>
                        <p className="text-[#266AC6] text-xl mb-3"> - 32</p>
                        <p className="text-[#B5B9BD] text-xl mb-2.5"> - 23</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponsSniper;
