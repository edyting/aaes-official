
import { useState } from "react";

// icons
import { GrProjects } from "react-icons/gr";
import { GrGallery } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import { Link } from "react-router-dom";






const Dashboard = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Project", src: <GrProjects />,
      "link":"projects",    },
    { title: "Gallery", src: <GrGallery /> ,
      "link":"gallery",   },
    { title: "Executives", src: <IoPerson /> ,
      "link":"executives",  },
    { title: "Events ", src: <MdOutlineEventAvailable />,
      "link":"events",
    }, 
    { title: "Home ", src: <MdOutlineEventAvailable />,
      "link":"/",
    },
  ];

  const cards= [
    {
      "title": "projects",
      "len":20,
      "link":"projects",
      "color":"bg-red-400",
      "text":"text-red-400"
    },
    {
      "title": "gallery",
      "len":18,
      "link":"gallery",
      "color":"bg-green-400",
      "text":"text-green-400"
    },
    {
      "title": "executives",
      "len":5,
      "link":"executives",
      "color":"bg-yellow-400",
      "text":"text-yellow-400"
    },
    {
      "title": "events",
      "len":0,
      "link":"events",
      "color":"bg-blue-400",
      "text":"text-blue-400"
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
                <Link to={`${Menu.link}`}>{Menu.title}</Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen w-full p-7">
        {/* main page section */}

          {/* inner container */}
          <div className="h-full grid md:grid-cols-4 gap-5 grid-cols-1  md:grid-rows-1 ">
              {cards.map((card)=>(
                <div key={card.title} className="flex  items-center" >
                    {/* cards */}
                      <div className={`${card.color} w-full rounded-xl h-full  md:h-[50%]`}>
                            <h2 className="font-bold md:text-5xl  p-4 text-center text-white mt-[10%]">{card.len}</h2>
                            <h2 className="p-4 text-center text-white text-3xl font-bold capitalize">{card.title}</h2>
                            {/* link to details */}
                            <div className="   w-full flex justify-center font-bol text-2xl">
                              
                              <button className="px-4 bg-white rounded-[6px] pb-[4px]">
                              <Link to={`${card.link}`} className={`${card.text}`}>more </Link>
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