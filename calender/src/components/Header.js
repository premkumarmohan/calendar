import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GoHome, GoHomeFill } from "react-icons/go";
import { TbFolderStar } from "react-icons/tb";
import { PiChatTeardropTextThin, PiFolderSimpleStarFill } from "react-icons/pi";
import { IoMdClose, IoMdNotificationsOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [selectedMenu, setMenu] = useState("home");
  const [wapMenu,setWapMenu] = useState(false);
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-5 shadow-md">
        <div className="flex justify-between items-center">
          <div className="flex lg:space-x-5 space-x-2 w-full">
            <p className="lg:p-5 p-4 bg-orange-500 rounded-full"></p>
            <input
              type="search"
              className="rounded-md px-2"
              placeholder="search"
            />
          </div>
         
          <div className="flex justify-between w-full">
            <div className="lg:flex hidden justify-center items-center">
              <ul className="flex space-x-8">
                <li className="font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("home");
                    }}
                    className={
                      selectedMenu === "home"
                        ? "border-sky-400 border-b-[1px]"
                        : ""
                    }
                  >
                    {selectedMenu === "home" ? (
                      <GoHomeFill size={24} color="lightblue" />
                    ) : (
                      <GoHome size={24} />
                    )}
                  </button>
                </li>
                <li className=" font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("star");
                    }}
                    className={
                      selectedMenu === "star"
                        ? "border-sky-400 border-b-[1px]"
                        : ""
                    }
                  >
                    {selectedMenu === "star" ? (
                      <FaStar size={24} color="lightblue" />
                    ) : (
                      <FaRegStar size={24} />
                    )}
                  </button>
                </li>
                <li className=" font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("folder");
                    }}
                    className={
                      selectedMenu === "folder"
                        ? "border-sky-400 border-b-[1px]"
                        : ""
                    }
                  >
                    {selectedMenu === "folder" ? (
                      <PiFolderSimpleStarFill size={24} color="lightblue" />
                    ) : (
                      <TbFolderStar size={24} />
                    )}{" "}
                  </button>
                </li>
              </ul>
            </div>
            <div className="lg:flex items-center hidden ">
              <div className="flex space-x-4 items-center">
                <div className="relative">
                  <span className="absolute top-0 right-0 rounded-full bg-red-600 w-3 text-sm text-white h-3 flex justify-center items-center">
                    4
                  </span>
                  <PiChatTeardropTextThin size={24} />
                </div>
                <div className="relative">
                  <span className="absolute top-0 right-0 rounded-full bg-red-600 w-3 text-sm text-white h-3 flex justify-center items-center">
                    4
                  </span>

                  <IoMdNotificationsOutline size={24} />
                </div>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                    className="w-[40px] h-[40px] rounded-full"
                    width={"100%"}
                    height={"100%"}
                  />
                  <p className="font-semibold ">Jacob Botssh</p>
                </div>
              </div>
            </div>
          </div>
           <button onClick={()=>{setWapMenu(!wapMenu)}} className="lg:hidden inline-block">
            {wapMenu ? <IoMdClose size={24} /> : <IoMenu size={24}/>        }
            
          </button>
        </div>
        {wapMenu && <div className="relative ">
                    <div className="absolute right-0 z-50 w-[250px] h-screen bg-gray-300 rounded-l-lg">
                    <ul className="p-4 flex-cols space-y-4">
                <li className="font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("home");
                    }}
                    className={
                      selectedMenu === "home"
                        ? "border-sky-400 text-sky-400 border-b-[1px] lg:inline-block flex space-x-4"
                        : "lg:inline-block flex space-x-4"
                    }
                  >
                    {selectedMenu === "home" ? (
                      <GoHomeFill size={24} color="lightblue" />
                    ) : (
                      <GoHome size={24} />
                    )}
                    <span>Home</span>
                  </button>
                </li>
                <li className=" font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("star");
                    }}
                    className={
                      selectedMenu === "star"
                        ? "border-sky-400 text-sky-400 border-b-[1px] lg:inline-block flex space-x-4"
                        : "lg:inline-block flex space-x-4"
                    }
                  >
                    {selectedMenu === "star" ? (
                      <FaStar size={24} color="lightblue" />
                    ) : (
                      <FaRegStar size={24} />
                    )}
                    <span>Star</span>
                  </button>
                </li>
                <li className=" font-semibold">
                  {" "}
                  <button
                    onClick={() => {
                      setMenu("folder");
                    }}
                    className={
                      selectedMenu === "folder"
                        ? "border-sky-400 text-sky-400 border-b-[1px] lg:inline-block flex space-x-4"
                        : "lg:inline-block flex space-x-4"
                    }
                  >
                    {selectedMenu === "folder" ? (
                      <PiFolderSimpleStarFill size={24} color="lightblue" />
                    ) : (
                      <TbFolderStar size={24} />
                    )}{" "}
                    <span>Folder</span>
                    
                  </button>
                </li>
              </ul>
                    </div>
            </div>}
      </nav>
    </header>
  );
};

export default Header;
