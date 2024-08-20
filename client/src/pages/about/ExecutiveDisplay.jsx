import React from "react";
import { HashLink } from "react-router-hash-link";
import userimg from "../../assets/avatar3.jpg";

export default function ExecutiveDisplay() {
  return (
    <div>
      {/* section title */}
      <div className=" ">
        <h2 className="text-4xl ml-8 font-bold text-[#0099ff]">
          Meet Our Executives
        </h2>
      </div>
      {/* main container */}
      <div className="w-full h-[25rem] my-8">
        {/* grid container */}
        <div className="grid w-[80%] h-full mx-auto grid-cols-3 gap-4">
          {/* grid items -1 */}
          <div className="w-full flex flex-col items-center rounded-xl p-4 outline outline-2   outline-[#0099ff] h-full ">
            {/* image container */}
            <div className=" w-[90%] h-[90%]   rounded-xl">
              <img
                className="bject-none rounded-xl w-full h-full "
                src={userimg}
                alt=""
              />
            </div>
            {/* position held */}
            <h2 className=" my-2 text-2xl">President</h2>
            {/* program */}
            <h2 className="  text-2xl">Aerospace</h2>
          </div>

          {/* grid items -1 */}
          <div className="w-full flex flex-col items-center rounded-xl p-4 outline outline-2   outline-[#0099ff] h-full ">
            {/* image container */}
            <div className=" w-[90%] h-[90%]   rounded-xl">
              <img
                className="bject-none rounded-xl w-full h-full "
                src={userimg}
                alt=""
              />
            </div>
            {/* position held */}
            <h2 className=" my-2 text-2xl">President</h2>
            {/* program */}
            <h2 className="  text-2xl">Aerospace</h2>
          </div>

          {/* grid items -1 */}
          <div className="w-full flex flex-col items-center rounded-xl p-4 outline outline-2   outline-[#0099ff] h-full ">
            {/* image container */}
            <div className=" w-[90%] h-[90%]   rounded-xl">
              <img
                className="bject-none rounded-xl w-full h-full "
                src={userimg}
                alt=""
              />
            </div>
            {/* position held */}
            <h2 className=" my-2 text-2xl">President</h2>
            {/* program */}
            <h2 className="  text-2xl">Aerospace</h2>
          </div>
        </div>
      </div>
      {/* link to executive section on about page  */}
      <div className="ml-12">
        <button className="capitalize text-[#0099ff] border-primary  border-2 px-4 py-2 mb-4 my-8  hover:text-white hover:bg-[#0099ff] rounded hover:text-primary">
          {/* {!eventstate ? " view next event": " view past events"}   */}
          <HashLink to={"/about/#executives"}>Meet Our executives</HashLink>
        </button>
      </div>
    </div>
  );
}
