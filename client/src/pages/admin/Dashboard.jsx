
import { useState } from "react";

// icons
import { GrProjects } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";






const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Project", src: <GrProjects />    },
    { title: "Gallery", src: <GrGallery />    },
    { title: "Executives", src: <IoPerson />   },
    { title: "Events ", src: <MdOutlineEventAvailable />
    },
  ];

  return (
    <div className="flex bg-slate-200">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-[#0099ff] h-screen p-5  pt-8 relative duration-300`}
      >
        <IoMenuSharp 
          src=""
          className={`absolute  text-4xl cursor-pointer -right-3 top-9 w-12
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src=""
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <p className="text-white"> {Menu.src} </p>
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        {/* main page section */}
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>
    </div>
  );
};
export default Dashboard;