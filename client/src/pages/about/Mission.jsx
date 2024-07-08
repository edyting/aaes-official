import React from 'react'

export default function Mission() {
  return (
    <div>
        {/* main container */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-10 md:px-12 px-2  mb-12 ">
            {/* mission */}
            <div className="h-full outline rounded-xl p-2 outline-[#0099ff]  outline-2 md:w-2/4">
                <h2 className='text-[#0099ff] font-bold mb-2 text-3xl ml-8'>Mission</h2>
                <div className="p-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis nam eligendi rerum distinctio, dolores accusantium dolorum dolorem molestias fugit amet illo repellat rem commodi officiis laudantium. Illum eius nam, voluptatem ipsam, sunt accusantium fugit doloremque totam laudantium animi praesentium commodi corrupti dignissimos quidem vitae voluptatum corporis. Ab, fugit quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in explicabo esse optio expedita quo debitis reiciendis atque eius deleniti.</p>
                </div>
            </div>
            {/* vision */}
            <div className="h-full outline rounded-xl p-2 outline-[#0099ff]  outline-2 md:w-2/4">
                <h2 className='text-[#0099ff] font-bold mb-2 text-3xl ml-8'>Vision</h2>
                <div className="p-4">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi perspiciatis nam eligendi rerum distinctio, dolores accusantium dolorum dolorem molestias fugit amet illo repellat rem commodi officiis laudantium. Illum eius nam, voluptatem ipsam, sunt accusantium fugit doloremque totam laudantium animi praesentium commodi corrupti dignissimos quidem vitae voluptatum corporis. Ab, fugit quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in explicabo esse optio expedita quo debitis reiciendis atque eius deleniti.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
