import React from "react";
import { IoIosReturnRight } from "react-icons/io";



export default function Button({title = "Get Sarted"}) {
  return (
    <div className="flex items-center justify-between w-[125px] px-2 py-1 text-black bg-zinc-100 rounded-full">
      <span className="text-sm font-semibold">{title}</span>
      <IoIosReturnRight className="text-lg" />
      
    </div>
  );
}
