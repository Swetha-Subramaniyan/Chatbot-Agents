import React from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";
import { RiRobot2Line } from "react-icons/ri";

const AgentCard = ({ title, description, date }) => {
  return (
    <div className="flex flex-col border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center">
      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full">
      <RiRobot2Line />
      </div>

        <button className="text-gray-500 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v.01M12 12v.01M12 18v.01"
            />
          </svg>
        </button>
      </div>
      
      <h3 className="text-md font-semibold text-gray-800 mt-1">{title}</h3>
      <p className="text-xs text-gray-500 mt-1  font-semibold">{date}</p>
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{description}</p>
    </div>
  );
};

const Home = () => {
  const agents = [
    {
      title: "Startup Idea Validator Expert",
      date: "Tue Oct 08 2024",
      description:
        "You are a pragmatic business strategist with expertise in dissecting business ideas for real-world applicability...",
    },
    {
      title: "User Persona Generator Expert",
      date: "Tue Oct 08 2024",
      description:
        "You're a world-class user persona researcher. Given a business, you are tasked with creating a comprehensive User Persona Report...",
    },
    {
      title: "Business Model Canvas Expert",
      date: "Tue Oct 08 2024",
      description:
        "You're a world-class business expert who excels at creating Business Model Canvas. Given a business idea, you will generate...",
    },
    {
      title: "Claude 3 Haiku Agent",
      date: "Tue Oct 08 2024",
      description:
        "You are a skilled research agent with a background in information retrieval, critical analysis, and academic writing...",
    },
    {
      title: "GPT-4o Agent",
      date: "Tue Oct 08 2024",
      description:
        "You are a skilled research agent with a background in information retrieval, critical analysis, and academic writing...",
    },
    {
      title: "LLaMa 3 70b Agent",
      date: "Tue Oct 08 2024",
      description:
        "You are a skilled research agent with a background in information retrieval, critical analysis, and academic writing...",
    },
  ];

  return (
  <div>
  <div className="flex flex-col h-screen">
 <div className="flex flex-1 mr-10">
   <SideBar />
   <div className="flex-1 p-2 ml-10">
   <TopNav />

   <div className="flex bg-gray-100 w-fit m-1 p-2 rounded-3xl mt-4 gap-2">
      <div className="bg-white rounded-3xl p-2 font-semibold text-sm">My Own <span className="bg-gray-100 rounded-full p-1 font-semibold text-xs">11</span></div>
      <div className="p-2 text-sm">Templates</div>
    </div>


   <div class="flex items-center gap-4 mb-4 mt-4">

    
    
       <div class="relative flex items-center">
         <div class="flex items-center justify-center w-8 h-8 rounded bg-gray-100">
           <img
             src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons/filter-3-line-n93qvvgrlahrv0pigdk4gn.png/filter-3-line-8r0py2r9wgmeodgngwvm0n.png?_a=DAJFJtWIZAAC"
             alt="Sort"
             class="h-4 w-4"
           />
         </div>
         <span class="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full px-1">
           0
         </span>
       </div>

       <div class="flex-1">
         <input 
           type="text" 
           placeholder="Type to Search..." 
           class="w-full border p-2 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm bg-gray-100"
         />
       </div>
     </div>


     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       <div className="flex items-center justify-center p-8 flex-col bg-gray-100 border border-dashed border-gray-300 rounded-md">
         <p className="text-blue-700 font-semibold text-2xl mb-2">+</p>
         <p className="text-blue-700 font-semibold text-sm">New Agent</p>
       </div>
       {agents.map((agent, index) => (
         <AgentCard
           key={index}
           title={agent.title}
           date={agent.date}
           description={agent.description}
         />
       ))}
     </div>
   </div>
 </div>
</div></div>
  );
};

export default Home;
