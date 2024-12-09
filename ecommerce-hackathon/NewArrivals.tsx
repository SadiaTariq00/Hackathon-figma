import Image from "next/image";

import { FaStar } from "react-icons/fa";

const product = [
  {
    title: "T-shirt with Tape Details",
    price: "$120",
   
    image: "/shirt1.png",
    rating: "5",
    reviews: "4.5/5",
  },

  {
    title: "Skinny Fit Jeans",
    price: "$240",
    oldPrice: "$260",
    image: "/pant.png",
    rating: "4",
    reviews: "3.5/5",
    discount:"-20%",
  },

  {
    title: "Checkered Shirt",
    price: "$180",
   
    image: "/shirt2.png",
    rating: "4",

  },

  {
    title: "Sleeve Striped T-Shirt",
    price: "$130",
    oldPrice: "$160",
    image: "/shirt3.png",
    rating: "4",
    reviews: "4.5/5",
    discount:"-30%",
  },
];
const ProductBox = ({ product }: { product: any }) => (
  <div className="relative  ">
    
    <div className="group shadow-md inset-0 bg-opacity-50 bg-neutral-200  rounded-md w-[220px] h-[240px] flex justify-center items-center relative cursor-pointer">
      <Image src={product.image} width={150} height={100} alt={product.title} />
      
      {/* <button className="w-full absolute bottom-0 bg-black text-white px-4 py-2 rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300">
        Add to Cart
      </button> */}
    </div>
    <h1 className="font-bold font-sans pt-2">{product.title}</h1>
    <div className="flex items-center space-x-1 text-yellow-400 text-md pt-1">
        
      {[...Array(5)].map((_, index)  =>
        index < product.rating ? (
          <FaStar key={index} />
        ) : (
          <FaStar key={index} />
          
        )
        
      )}
         
         <span className="text-gray-800 text-sm  text:sm ml-1">{product.reviews}</span>
       </div>
    <div className="flex items-center space-x-2">
      <span className="text-black font-bold">{product.price}</span>
      <span className="text-gray-500 font-bold line-through">
          {product.oldPrice}
        </span>
      {product.discount && (
        <span className="text-red-600  text-xs rounded-xl bg-red-200 ">
          {product.discount}
        </span>
        
       
      )}
    </div>

  
    </div>
 
);
const NewArrivals = () => {
  return(

    <main>
      <div className="w-full flex justify-center items-center mt-10  bottom-96 relative ">
       
        <div className="w-[80%]">
          <div className="flex flex-col">
    
         <div className="flex justify-center items-center">
          <h1 className="text-black  sm:text-md md:text-3xl lg:text-3xl pt-4 text-center font-extrabold">NEW ARRIVALS</h1>
         
         </div>
          </div>
          <div className="flex flex-wrap justify-between mt-5 gap-y-6">
            {product.map((product, index) => (
              <ProductBox key={index} product={product}/>
            ))}
          </div>
          <button
          className="border border-gray-400 text-black py-0 hover:bg-red-400 sm:px-3 md:px-7 left-[490px] items-center justify-center  relative sm:text-sm md:text-sm   rounded-full h-10 mt-3">
            View All
            </button>
        </div>
        
      </div>
  
    </main>
    
  )
};
export default NewArrivals;


