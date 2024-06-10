import React from 'react'

function Newsletter() {
  return (
    <div>
      {/* container */}
      <div className="bg-gray-600 p-4 mx-2 md:mx-0 py-8 mt-1 rounded-lg">
        <h1 className='text-lg capitalize font-bold'>suscribe</h1>
        <p className='capitalize text-sm'>join our mailing list and get our news </p>
        {/* input */}
        <div className="py-2 md:w-[30rem]">
            <form action="" className='flex'>
            <input type="text" placeholder='your email address' name="" id="" className='rounded-l-lg w-full p-4' />
            <input type="submit" className='text-white px-4 bg-primary rounded-r-lg' value="Suscribe" />
            </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter