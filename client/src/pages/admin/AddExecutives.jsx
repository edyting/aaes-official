import { createExecutive } from '@/api/api'; // Ensure this function is properly defined in your API
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
  const [full, setFull] = useState('');
  const [position, setPosition] = useState('');
  const [academic, setAcademic] = useState('');
  const [programme, setProgramme] = useState('');
  const [cover, setCover] = useState(null);

  const navigate = useNavigate(); // Use useNavigate for redirecting

  // Getting the date for the academic year
  const currentYear = new Date().getFullYear();
  const numberOfRanges = 5; // Number of ranges you want to display
  const startYear = currentYear;

  const dateRanges = generateDateRanges(startYear, numberOfRanges);
  const [selectedRange, setSelectedRange] = useState(dateRanges[0]);

  const handleChange = (event) => {
    setSelectedRange(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('fullName', full);
    formData.append('position', position);
    formData.append('academicYear', selectedRange);
    formData.append('programme', programme);
    formData.append('photo', cover);

    try {
      await createExecutive(formData);
      navigate('/dash/executives'); // Redirect to executives page after successful submission
    } catch (error) {
      console.error('Failed to create executive:', error);
    }
  };

  return (
    <div className='w-full'>
      <div className="w-[80%] flex justify-between items-center py-8 mx-auto">
        <h2 className='text-4xl font-bold'>Add Executives</h2>
        <Link to={'/dash/executives'} className='text-[#0099ff]'>Back to Executives</Link>
      </div>
      {/* Container */}
      <div className="w-[80%] mx-auto">
        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Form content container */}
          <div className="bg-slate-100 rounded-xl p-4">
            {/* Full Name */}
            <div className="my-4 flex flex-col">
              <label htmlFor="" className="text-xl text-[#0099ff]">Full Name:</label>
              <input
                type="text"
                placeholder='Enter Full Name'
                className='w-full rounded-[5px] p-2'
                value={full}
                onChange={(e) => setFull(e.target.value)}
              />
            </div>

            {/* Position */}
            <div className="w-full my-4">
              <label htmlFor="" className="text-xl text-[#0099ff]">Position</label>
              <select
                id="position"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff]"
              >
                <option value="">Select Position</option>
                <option value="President">President</option>
                <option value="Vice President">Vice President</option>
                <option value="General Secretary">General Secretary</option>
              </select>
            </div>

            {/* Academic Year */}
            <div className="w-full my-4">
              <label htmlFor="" className="text-xl text-[#0099ff]">Academic Year</label>
              <select
                id="academic"
                value={selectedRange}
                onChange={handleChange}
                className="block w-full p-2 border rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff]"
              >
                {dateRanges.map((range, index) => (
                  <option key={index} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Program */}
            <div className="my-4 flex flex-col">
              <label htmlFor="" className="text-xl text-[#0099ff]">Program</label>
              <select
                id="program"
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border rounded-[5px] shadow-sm focus:outline-none focus:ring-[#0099ff] focus:border-[#0099ff]"
              >
                <option value="">Select Program</option>
                <option value="Automobile">Automobile</option>
                <option value="Aerospace">Aerospace</option>
                <option value="Marine">Marine</option>
              </select>
            </div>

            {/* Cover Photo */}
            <div className="my-4 flex flex-col">
              <label htmlFor="" className='text-xl text-[#0099ff]'>Executive Photo</label>
              <input
                type="file"
                accept='image/*'
                className='rounded-[5px] outline-none border-none'
                onChange={(e) => setCover(e.target.files[0])}
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Add Executive
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
