import { useState } from "react";
import { Outlet, Link } from "react-router-dom"; // Ensure Outlet is imported for nested routes
import Sidebar from "./components/Sidebar";
import { GrProjects, GrGallery } from "react-icons/gr";
import { IoPerson, IoMenuSharp } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Projects", icon: <GrProjects />, link: "/dash/projects" },
    { title: "Gallery", icon: <GrGallery />, link: "/dash/gallery" },
    { title: "Executives", icon: <IoPerson />, link: "/dash/executives" },
    { title: "Events", icon: <MdOutlineEventAvailable />, link: "/dash/events" },
    { title: "Home", icon: <MdOutlineEventAvailable />, link: "/" },
  ];

  const cards = [
    { title: "Projects", len: 20, link: "/dash/projects", color: "bg-red-400", text: "text-red-400" },
    { title: "Gallery", len: 18, link: "/dash/gallery", color: "bg-green-400", text: "text-green-400" },
    { title: "Executives", len: 5, link: "/dash/executives", color: "bg-yellow-400", text: "text-yellow-400" },
    { title: "Events", len: 0, link: "/dash/events", color: "bg-blue-400", text: "text-blue-400" },
  ];

  return (
    <div className="flex bg-slate-200">
      {/* <Sidebar open={open} setOpen={setOpen} /> */}
      {/* <div className="h-screen w-full p-7">
        <div className="h-full grid md:grid-cols-4 gap-5 grid-cols-1 md:grid-rows-1">
          {cards.map((card) => (
            <div key={card.title} className="flex items-center">
              <div className={`${card.color} w-full rounded-xl h-full md:h-[50%] shadow-lg transform transition duration-500 hover:scale-105`}>
                <h2 className="font-bold md:text-5xl p-4 text-center text-white mt-[10%]">{card.len}</h2>
                <h2 className="p-4 text-center text-white text-3xl font-bold capitalize">{card.title}</h2>
                <div className="w-full flex justify-center font-bold text-2xl">
                  <button className="px-4 bg-white rounded-[6px] pb-[4px]">
                    <Link to={card.link} className={`${card.text}`}>More</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <Outlet />
      </div>
    // </div>
  );
};

export default Dashboard;
