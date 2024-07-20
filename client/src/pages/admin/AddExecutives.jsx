import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';



// Function to generate date ranges
const generateDateRanges = (startYear, numberOfRanges) => {
    const ranges = [];
    for (let i = 0; i < numberOfRanges; i++) {
      const currentYear = startYear + i;
      const nextYear = currentYear + 1;
      ranges.push(`${currentYear}/${nextYear}`);
    }
    return ranges;
  };



export default function AddExecutives() {
    const [value, setValue] = useState('');

    const formats =[
        'header',
        'bold','italic','underline','strike','blockquote',
        'list','bullet','indent',
        'link','image'
        ]

        const modules ={
            toolbar:[
              [{'header':[1,2,3,4,5,6,false]}],
              ['bold','italic','underline','strike','blockquote'],
              [{'list':'ordered'},{'list':'bullet'},{'indent':'1'},{'indent':'+1'}],
              ['link','image'],
              ['clean']
            ],
          }

        //   select executive position
        const [selectedOption, setSelectedOption] = useState('');

        const handleSelectChange = (event) => {
            setSelectedOption(event.target.value);
        };

         //   select executive program
         const [selectedProgram, setSelectedProgram] = useState('');

         const handleSelectProgram = (event) => {
             setSelectedProgram(event.target.value);
         };

        // Getting the date for the academic year
        const currentYear = new Date().getFullYear();
        const numberOfRanges = 5; // Number of ranges you want to display
        const startYear = currentYear;
      
        const dateRanges = generateDateRanges(startYear, numberOfRanges);
        const [selectedRange, setSelectedRange] = useState(dateRanges[0]);
      
        const handleChange = (event) => {
          setSelectedRange(event.target.value);
        };


  return (
    <div className='w-full'>
        <div className=" w-[80%]  flex justify-between items-center py-8 mx-auto">
            <h2 className='text-4xl font-bold '>Add Executives</h2>
            <Link to={'/dash/executives'} className='text-[#0099ff]'>Back to Executives</Link>
        </div>
        {/* container */}
        <div className="w-[80%] mx-auto">
                {/* form */}
                <form action="">
                    {/* form content container */}
                    <div className="bg-slate-100 rounded-xl p-4">
                        {/* get title */}
                        <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Full Name:
                            </label>
                            <input type="text" placeholder='Enter FullName' className='w-full rounded-[5px] p-2' />
                        </div>

                            {/* flex-container */}
                        <div className="flex items-center gap-[5%] justify-between w-full">
                            
                        {/* get position -> must be a select */}
                        <div className="w-full">
                        <label htmlFor="" className="text-xl text-[#0099ff]">
                                Position
                            </label>
                            {/* <input type="text" className='w-full rounded-[5px] p-2' /> */}
                            {/* select executive position */}
                            <select
                                id="options"
                                value={selectedProgram}
                                onChange={handleSelectProgram}
                                className="mt-1 block w-full px-3 py-2 bg-white border  rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff]"
                                >
                                <option value="" className=''>Select Program</option>
                                <option value="option1">President</option>
                                <option value="option2">Vice President</option>
                                <option value="option3">General Secretary</option>
                             </select>
                        </div>
                        {/* get academic year -> must be a select */}
                        <div className="w-full">
                        <label htmlFor="" className="text-xl text-[#0099ff]">
                                Academic Year
                            </label>
                            {/* <input type="text" className='w-full rounded-[5px] p-2' /> */}
                            {/* getting the academic year */}
                            <select
                                id="dateRange"
                                value={selectedRange}
                                onChange={handleChange}
                                className="block w-full p-2 border  rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff] sm:text-sm"
                            >
                                {dateRanges.map((range, index) => (
                                <option key={index} value={range}>
                                    {range}
                                </option>
                                ))}
                             </select>
                        </div>
                        </div>

                         {/* get program */}
                         <div className=" my-4  flex flex-col ">
                            <label htmlFor="" className="text-xl text-[#0099ff]">
                                Program
                            </label>
                            {/* <input type="text" placeholder='Enter FullName' className='w-full rounded-[5px] p-2' /> */}
                            <select
                                id="options"
                                value={selectedOption}
                                onChange={handleSelectChange}
                                className="mt-1 block w-full px-3 py-2 bg-white border  rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff]"
                                >
                                <option value="" className=''>Select Position</option>
                                <option value="option1">Automobile</option>
                                <option value="option2">Aerospace</option>
                                <option value="option3">Marine</option>
                             </select>
                        </div>


                        {/* get cover photo */}
                        <div className="my-4 flex flex-col">
                            <label htmlFor="" className='text-xl text-[#0099ff]'>Executive Photo</label>
                            <input type="file" accept='image/*' className='rounded-[5px] outline-none border-none   ' alt="cover photo" />
                        </div>

                        {/* submit form */}
                        <div className="w-full flex justify-center">
                        <input type="submit" value="Add Executive" className='bg-white border border-[#0099ff] rounded-[5px] px-2 py-1 mx-auto' />
                        </div>

                        
                    </div>
                </form>
        </div>
    </div>
  )
}
