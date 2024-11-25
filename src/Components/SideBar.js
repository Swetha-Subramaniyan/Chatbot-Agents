import React, { useState } from 'react'; 
import { GoWorkflow } from "react-icons/go";
import { FiHome } from "react-icons/fi";
import { PiNotePencilBold } from "react-icons/pi";
import { FiDatabase } from "react-icons/fi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { RiRobot2Line } from "react-icons/ri";
import { PiHandshakeBold } from "react-icons/pi";
import { LuArrowLeftFromLine } from "react-icons/lu";
import { LuArrowRightFromLine } from "react-icons/lu";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); 

  const toggleSidebar = () => {
    setIsSidebarVisible(prevState => !prevState); 
  };

  return (
    <>
      {/* Sidebar */}
      <div className={`flex flex-col w-64 h-full bg-gray-100 shadow-lg ${isSidebarVisible ? 'block' : 'hidden'}`}>
      <div className="flex justify-end m-3">
        <button 
          className="w-6 h-6 mb-4 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs" 
          onClick={toggleSidebar} 
        >
          V
        </button>
      </div>
        
        <div className="flex items-center justify-between text-sm font-semibold bg-white p-3 rounded-md ms-4 me-4 border border-gray-400">
          <span>Personal Workspace</span>
          <div className="flex flex-col">
            <span className="material-icons text-gray-600 cursor-pointer">
              <IoIosArrowUp />
            </span>
            <span className="material-icons text-gray-600 cursor-pointer">
              <IoIosArrowDown />
            </span>
          </div>
        </div>

        <div className="p-4 bg-white border border-gray-400 ms-4 me-4 mt-3 rounded-md">
          <button className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 shadow-md hover:shadow-lg">
            Upgrade
          </button>

          <div className="mt-4">
            <div className="text-xs text-gray-600 flex justify-between">
              <span>0 / 100 AI Credits</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-indigo-600 rounded-full" style={{ width: "0%" }}></div>
            </div>

            <div className="text-xs text-gray-600 flex justify-between mt-4">
              <span>0 / 0.1 GB Storage</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <div className="h-full bg-green-600 rounded-full" style={{ width: "0%" }}></div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a href="#" className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-blue-200">
            <span className="material-icons-outlined">
              <FiHome />
            </span>
            <span className="ml-3 text-sm font-semibold">Home</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-800 rounded-md bg-blue-200">
            <span className="material-icons-outlined">
              <RiRobot2Line />
            </span>
            <span className="ml-3 text-sm font-semibold">Agents</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-blue-200">
            <span className="material-icons-outlined">
              <GoWorkflow />
            </span>
            <span className="ml-3 text-sm font-semibold">Workflows</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-blue-200">
            <span className="material-icons-outlined">
              <PiNotePencilBold />
            </span>
            <span className="ml-3 text-sm font-semibold">Notes</span>
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-800 rounded-md hover:bg-blue-200">
            <span className="material-icons-outlined">
              <FiDatabase />
            </span>
            <span className="ml-3 text-sm font-semibold">Knowledge Sources</span>
          </a>
        </nav>

        <div className="p-4 bg-gradient-to-t to-gray-400 from-black m-3 rounded-md">
          <div className="flex flex-col items-center justify-center text-sm text-gray-600">
            <span className="material-icons-outlined">
              <PiHandshakeBold className="text-white" />
            </span>
            <span className="ml-2 font-bold text-white">Bring AI to your team</span>
          </div>
          <div className="text-center text-xs text-white mt-2">
            Sharing & collaborating on AI agents & workflows with your team easily
          </div>
        </div>
      </div>

      {isSidebarVisible ?(
        <button 
        className="fixed top-8 left-60 z-50 bg-white p-2 rounded-full text-white" 
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? (
          <LuArrowLeftFromLine className="text-xl text-gray-400" />
        ) : (
          <LuArrowRightFromLine className="text-xl text-gray-400" />
        )}
      </button>
      ):(
        <button 
        className="fixed top-8 left-1 z-50 bg-gray-400 p-2 rounded-full text-white" 
        onClick={toggleSidebar}
      >
        {isSidebarVisible ? (
          <LuArrowLeftFromLine className="text-xl text-gray" />
        ) : (
          <LuArrowRightFromLine className="text-xl text-gray" />
        )}
      </button>
      )}
      
    </>
  );
};

export default Sidebar;
