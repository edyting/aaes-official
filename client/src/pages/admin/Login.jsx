import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='w-full flex items-center justify-center h-[100vh]'>
        {/* login form container */}
        <div className=" w-[50%] mx-auto rounded-xl shadow-xl bg-slate-50">
            <form action="">

                <div className=" text-center p-4">
                    <h2 className='text-3xl font-bold text-[#0099ff] '>Login</h2>
                </div>

                <div className="p-2 flex flex-col">
                    <label htmlFor="" className='text-xl text-[#0099ff]  p-1'>
                        UserName:
                    </label>
                    <input type="text" className='p-2 rounded-[5px] outline-none' placeholder='Enter Username' />
                </div>
                
                <div className="p-2 flex flex-col">
                    <label htmlFor="" className='text-xl text-[#0099ff] p-1'>
                        Password:
                    </label>
                    <input type="password" className='p-2  rounded-[5px] outline-none' name="" placeholder='Enter Password' id="" />
                </div>

                <Link to={'/dash'}>
                <div className=" text-center rounded-xl font-semibold my-3 border border-[#0099ff] w-[20%] mx-auto">
                    <input type="submit" value="Login"  />
                </div>
                </Link>
            </form>
        </div>
    </div>
  )
}
