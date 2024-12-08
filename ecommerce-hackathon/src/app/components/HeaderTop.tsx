
import React from 'react';
import { RxCross2 } from "react-icons/rx";

export default function HeaderTop() {
  return (
  <div className="bg-black text-white py-2">
<div className="container mx-auto flex justify-between items-center">
<div className="flex-1"></div>
<div className="text-sm  font-Satoshi ">Sign up and get 20% off to your first order. <button className='underline'>Sign Up Now </button></div>
<div className="flex-1 flex justify-end items-center">
             <div className="flex gap-4 pl-0 lg:pl-80">
             <RxCross2  className='relative right-10'/>
                
              </div>
           </div>
          </div>
        </div>
  
  
  );
}


