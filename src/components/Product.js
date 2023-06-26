import * as images from "../images/images"

import React from 'react'

export default function Product({naam, info, foto, url}){
  
  return(
    <div className="">
        <div className="bg-white flex justify-center">
            <img className='h-80' src={images[foto]} alt=""/>
        </div>
        <p className="text-xl lg:text-2xl border-b-2 mt-2 pb-1 border-gray-400">{naam}</p>
        <p className='text-base lg:text-lg mt-2 pb-1'>{info}</p>
        <a className='flex justify-center items-center rounded-md w-full h-10 mt-2 shadow-xl hover:bg-gray-400 hover:text-[#373A36] duration-500' href={url} target="_blank" rel='noreferrer'>Link naar de productpagina</a>
    </div>
  )
}
