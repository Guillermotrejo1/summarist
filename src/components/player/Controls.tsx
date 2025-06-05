import React from 'react'
import { RiForward10Fill } from "react-icons/ri";
import { GrBackTen } from "react-icons/gr";
import { FaCirclePlay } from "react-icons/fa6";

export default function Controls() {
  return (
    <>
    <div className='flex gap-4 items-center'>
    <RiForward10Fill className='text-2xl' />
    <FaCirclePlay className='text-4xl' />
    <GrBackTen className='text-2xl' />
    </div>
    <audio src=" " />
    
    </>
  )
}