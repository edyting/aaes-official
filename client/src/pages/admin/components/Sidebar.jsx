import { useState } from "react";
import { GrProjects, GrGallery } from "react-icons/gr";
import { IoPerson, IoMenuSharp } from "react-icons/io5";
import { MdOutlineEventAvailable, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logout } from "@/api/api";

const Sidebar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login'); // Redirect to login page after successful logout
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const Menus = [
    { title: "Project", icon: <GrProjects />, link: "/dash/projects" },
    { title: "Gallery", icon: <GrGallery />, link: "/dash/gallery" },
    { title: "Executives", icon: <IoPerson />, link: "/dash/executives" },
    { title: "Events", icon: <MdOutlineEventAvailable />, link: "/dash/events" },
    { title: "Home", icon: <MdOutlineEventAvailable />, link: "/" },
  ];

  return (
    <div className={` ${open ? "w-72" : "w-20"} bg-[#002B5B] h-screen p-5 pt-8 relative duration-300`}>
      <IoMenuSharp
        className={`absolute text-3xl cursor-pointer -right-3 top-9 w-10 border-2 border-[#002B5B] rounded-full bg-white text-[#002B5B] ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex items-center gap-x-4 mb-6">
        <img src="" alt="Logo" className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
        <h1 className={`text-white font-medium text-xl duration-200 ${!open && "scale-0"}`}>Designer</h1>
      </div>
      <ul className="space-y-2">
        {Menus.map((Menu, index) => (
          <li key={index} className={`flex items-center gap-x-4 p-2 cursor-pointer rounded-md text-gray-300 hover:bg-[#004080] hover:text-white duration-200 ${index === 0 && "bg-[#004080]"}`}>
            <span className="text-2xl text-white">{Menu.icon}</span>
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              <Link to={`${Menu.link}`}>{Menu.title}</Link>
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <button className="flex items-center gap-x-4 p-2 cursor-pointer rounded-md text-gray-300 hover:bg-red-600 hover:text-white duration-200 w-full" onClick={handleLogout}>
          <MdLogout className="text-2xl text-white" />
          <span className={`${!open && "hidden"} origin-left duration-200`}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
