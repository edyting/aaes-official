import { useState } from "react";
import Sidebar from "./components/Sidebar"
import { GrProjects, GrGallery } from "react-icons/gr";
import { IoPerson, IoMenuSharp } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Project", icon: <GrProjects />, link: "projects" },
    { title: "Gallery", icon: <GrGallery />, link: "gallery" },
    { title: "Executives", icon: <IoPerson />, link: "executives" },
    { title: "Events", icon: <MdOutlineEventAvailable />, link: "events" },
    { title: "Home", icon: <MdOutlineEventAvailable />, link: "/" },
  ];

  const cards = [
    { title: "projects", len: 20, link: "projects", color: "bg-red-400", text: "text-red-400" },
    { title: "gallery", len: 18, link: "gallery", color: "bg-green-400", text: "text-green-400" },
    { title: "executives", len: 5, link: "executives", color: "bg-yellow-400", text: "text-yellow-400" },
    { title: "events", len: 0, link: "events", color: "bg-blue-400", text: "text-blue-400" },
  ];

  return (
    <div className="flex bg-slate-200">
      <Sidebar open={open} setOpen={setOpen} />
      {/* <div className={` ${open ? "w-72" : "w-20 "} bg-[#002B5B] h-screen p-5 pt-8 relative duration-300`}>
        <IoMenuSharp
          className={`absolute text-3xl cursor-pointer -right-3 top-9 w-10 border-2 border-[#002B5B] rounded-full bg-white text-[#002B5B] ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img src="" alt="Logo" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
          <h1 className={`text-white font-medium text-xl duration-200 ${!open && "scale-0"}`}>Designer</h1>
        </div>
        <ul className="pt-6 pb-6">
          {Menus.map((Menu, index) => (
            <li key={index} className={`flex items-center gap-x-4 p-2 cursor-pointer rounded-md text-gray-300 hover:bg-[#004080] hover:text-white duration-200 ${index === 0 && "bg-[#004080]"}`}>
              <span className="text-2xl text-white">{Menu.icon}</span>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                <Link to={`${Menu.link}`}>{Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div> */}
      <div className="h-screen w-full p-7">
        <div className="h-full grid md:grid-cols-4 gap-5 grid-cols-1 md:grid-rows-1">
          {cards.map((card) => (
            <div key={card.title} className="flex items-center">
              <div className={`${card.color} w-full rounded-xl h-full md:h-[50%] shadow-lg transform transition duration-500 hover:scale-105`}>
                <h2 className="font-bold md:text-5xl p-4 text-center text-white mt-[10%]">{card.len}</h2>
                <h2 className="p-4 text-center text-white text-3xl font-bold capitalize">{card.title}</h2>
                <div className="w-full flex justify-center font-bol text-2xl">
                  <button className="px-4 bg-white rounded-[6px] pb-[4px]">
                    <Link to={`${card.link}`} className={`${card.text}`}>more</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
