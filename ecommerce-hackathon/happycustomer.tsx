


import Card from "../components/card/card";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";


export default function Customer(){
    return(
       
          <>
            <div>


       <h1 className=' bottom-32 relative font-extrabold text-4xl font-sans left-8'> OUR HAPPY CUSTOMERS</h1>
       <FaArrowLeft className='relative left-[1240px] bottom-36 cursor-pointer'/>
         <FaArrowRight className="relative left-[1275px] bottom-40 cursor-pointer "/>
           
       </div>
            <div className="relative   ">
           <div className="flex justify-center items-center gap-6 relative bottom-24 ">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full px-4">
    <Card 
      text={"Sarah M."} 
      p={"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."} 
    />
    <Card 
      text={"Alex K."} 
      p={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."} 
    />
    <Card 
      text={"James L."} 
      p={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."} 
    />
  </div>
</div>

         </div>
            </>
       
    )
}