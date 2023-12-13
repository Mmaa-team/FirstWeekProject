import React, { useState } from 'react'

import { Input } from "@material-tailwind/react";
import signin from "../../assets/signin.png"

const Signup = () => {
    const [desplay,setDesplay]=useState(false)

    return (
        <div className=' flex justify-center flex-col lg:flex-row items-center h-screen  '>
            <div>
                <img className="h-[450px] " src={signin} />
            </div>

            <div className=" flex-col w-fit h-[450px] ml-10  bg-white bg-opacity-20 rounded-[10px] p-5" >
                <div className="text-center  text-gray-600 text-3xl font-extrabold font-['SF Pro Display'] tracking-tight p-6">Sign Up</div>
                <div><span className=" text-gray-600 text-lg font-normal font-['SF Pro Display'] tracking-tight">Already a Member?</span>
                    <span className="text-[#733709] text-lg font-normal font-['SF Pro Display'] tracking-tight"> </span>
                    <span className="text-[#733709] text-lg font-medium font-['SF Pro Display'] tracking-tight">Sign In</span></div>


                <div className="flex flex-col gap-3">
                <Input className="text-lg p-2 h-[30px] font-normal font-['SF Pro Display']   bg-white bg-opacity-20 tracking-tight" variant="standard" placeholder="Email" />
                <div className='flex flex-col md:flex-row gap-4'>

                    <Input className="text-lg p-2 h-[30px] font-normal font-['SF Pro Display']   bg-white bg-opacity-20 tracking-tight" variant="standard" placeholder="Full name" />
                    <Input className="text-lg p-2 h-[30px] font-normal font-['SF Pro Display']   bg-white bg-opacity-20 tracking-tight" variant="standard" placeholder="Name" /> 
               </div>
               <div class="mb-6">
               <Input className="text-lg p-2 h-[30px] font-normal font-['SF Pro Display']   bg-white bg-opacity-20 focus:ring-blue-500 tracking-tight" onClick={()=>setDesplay(!desplay)}  variant="standard"  placeholder="Password" /> 
              {desplay && <p class="text-gray-600 text-xs mt-1">Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>}
            </div>
              <div>
              <label
            class="font-semibold text-sm text-gray-600 pb-1 block"
            for="dob"
            >Date of Birth</label>
              <Input
            className="text-lg  h-[30px] font-normal font-['SF Pro Display']   bg-white bg-opacity-20 focus:ring-blue-500 tracking-tight"
            type="date"
           
          /></div>
          </div>
          <button
         className="bg-[#733709] text-white px-4  mt-3 float-right rounded-full transition duration-200 ease-in-out hover:bg-[#DC9D6D] active:bg-[#B27F58] focus:outline-none"
          >
              Sign in
         </button>

              



            </div>



        </div>
    )
}

export default Signup
