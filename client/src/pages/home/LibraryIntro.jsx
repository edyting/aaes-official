import React from 'react'

export default function LibraryIntro() {
  return (
    <div>
        {/* outer container */}
        <div className="w-full bg-gree h-[35vh] my-5">
            {/* inner container */}
            <div className="w-[95%] h-full   mx-auto rounded-xl library">
                {/* text */}
                <div className="md:w-[50%] text-4xl md:justify-between h-full md:px-[5%] justify-center text-white font-poppins font-bold flex flex-col md:flex-row items-center text-center">
                <h2>E-Library</h2>
                <h2>Coming Soon!!!</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
