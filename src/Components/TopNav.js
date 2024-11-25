import React from 'react';
import { RiRobot2Line } from "react-icons/ri";


const TopNav = () => {
  return (
    <nav className="bg-white shadow-md h-fit p-1 ">
      <div className="flex justify-between items-center">
        <div className="flex space-x-6 flex-col">
          <div className='flex flex-row gap-3 items-center'>
          <h1 className="text-lg font-bold text-gray-800">11 Agents</h1>
          <img
                src="https://www.pngkey.com/png/full/285-2857970_question-mark-question-mark-icon-transparent.png"
                alt="Ai-Agents"
                className="h-3 w-3"
              />
          </div>
          
          <div className="flex items-center gap-5">
            <button className="flex flex-row items-center gap-2 text-gray-600 hover:text-black font-medium border-b-2 border-transparent hover:border-black p-2">
            <RiRobot2Line />
              <p className="text-xs text-gray-600  hover:text-black font-semibold">Agent</p>
            </button>

            <button className="flex flex-row items-center gap-1 text-gray-600 hover:text-black font-medium border-b-2 border-transparent hover:border-black p-2">
              <img
                className="h-5 w-5"
                src="https://static.thenounproject.com/png/1049981-200.png"
                alt="Profile"
              />
              <p className="text-xs text-gray-600 hover:text-black font-semibold">Chatbot</p>
            </button>
          </div>
        </div>

        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-500">
          + New Agent
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
