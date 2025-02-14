import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { RiChatCheckFill } from "react-icons/ri";
import exampleImage from './img/mockup.webp'
import { IoLocation } from "react-icons/io5";







export default function Step(){
  return (
    <>

    <div className='text-slate-200 p-7 shadow-md'>
      <div className='mt-14 font-riot text-3xl  text-center'>
        <h1>No more hassle or guesswork in 
        <span className='text-orange-400'> hiring great team</span> members remotely</h1>
      </div>
      <div className='md:flex mt-10'>
        <div className='p-8 items-center flex flex-col'>
        <FaUserCheck className='m-2 text-6xl' />
        <h1 className='tracking-wide text-lg'>No account required</h1>
        <p className='text-slate-400'>Manage your job(s) via a link we’ll email you upon posting. You/your team can work together, hassle-free & password-free.</p>

        </div>
        <div className='p-8 items-center flex flex-col'>
        <BiImport className='m-2 text-6xl' />
        <h1 className='tracking-wide text-lg'>No account required</h1>
        <p className='text-slate-400'>Manage your job(s) via a link we’ll email you upon posting. You/your team can work together, hassle-free & password-free.</p>

        </div>
        <div className=' p-8 items-center flex flex-col'>
        <SiBookstack className='m-2 text-6xl' />
        <h1 className='tracking-wide text-lg'>No account required</h1>
        <p className='text-slate-400'>Manage your job(s) via a link we’ll email you upon posting. You/your team can work together, hassle-free & password-free.</p>

        </div>
        <div className='p-8 items-center flex flex-col'>
        <RiChatCheckFill className='m-2 text-6xl' />
        <h1 className='tracking-wide text-lg'>No account required</h1>
        <p className='text-slate-400'>Manage your job(s) via a link we’ll email you upon posting. You/your team can work together, hassle-free & password-free.</p>

        </div>
      </div>
    </div>

    <div className='group'>
        <div className=' text-center mt-16 items-center flex flex-col justify-center content-center'>
            <h1 className='font-riot text-white tracking-wide text-3xl m-10 '>
            <span className='text-orange-400'>fish </span>where the fish are</h1>
            <div className='mx-20 opacity-45 group-hover:opacity-100 flex justify-center mb-5 w-ful group-hover: relative animated-div'>
<div className='group-hover/img:opacity-85 absolute inset-0.5  bg-gradient-to-bl rounded-md -skew-y-6 -skew-x-3 blur opacity-65 from-slate-200 to-green-400 '>

</div>
<img src={exampleImage}         
    className='group/img group-hover:w-96 rounded-xl skew-y-1  -skew-x-6 transition-all delay-700 ease-in-out duration-700 group-hover:delay-1000'
              />
            <div className=' w-52 absolute top-8 left-auto opacity-5 group-hover:opacity-100  text-start text-xs'>
              <h1 className='capitalize '>your company</h1>
              <span className='w-full h-px bg-slate-400  inline-block'></span>
              <div className='rounded-full w-fit bg-orange-200 py-1 px-2 my-1 text-xs'>
                <span className='w-2 h-2 mx-1 inline-flex align-middle rounded-full bg-orange-400'></span>department
              </div>
              <h1 className='capitalize '>your position</h1>
              <p className='text-wrap py-1 text-slate-400'>We’re looking for an amazing person to join our team</p>
              <div className='space-x-8  my-2 text-slate-400'>
              <div className='inline-flex items-center  '>

              <IoLocation/>
                <p>
                remote worldwide</p>
              </div>
              <div className='inline-flex items-center  '>

<IoLocation/>
  <p>
  full-time</p>
</div>
              </div>

            </div>
            </div>
            <p className='m-6 text-slate-400'>Broadcasted through Remotive network </p>
        <span className='w-4 h-4 inline-block  animate-drop  mx-auto bg-orange-400 rounded-full '></span>
        </div>
    </div>
    </>
  )
}


