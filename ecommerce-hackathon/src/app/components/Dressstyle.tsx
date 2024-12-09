import React from "react";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-[866px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14 bottom-48 relative">
      {/* Heading */}
      <div className="text-center ">
        <h1 className="font-IntegralCF text-4xl font-extrabold  leading-[57.6px] my-12">
          BROWSE BY DRESS STYLE
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* First Image */}
        <div className="col-span-1">
          <div className="w-[407px] h-[289px] relative ml-1">
            <Image
              src="/frame 61.png" // Replace with your image path
              alt="Dress Style 1"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Second Image */}
        <div className="col-span-3">
          <div className="w-[670px] h-[289px] relative ml-36">
            <Image
              src="/frame 62.png" // Replace with your image path
              alt="Dress Style 2"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Third Image */}
        <div className="col-span-1">
          <div className="w-[660px] h-[289px] relative ml-1">
            <Image
              src="/frame 64.png" // Replace with your image path
              alt="Dress Style 3"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>

        {/* Fourth Image */}
        <div className="col-span-3">
          <div className="w-[407px] h-[289px] relative ml-[400px] ">
            <Image
              src="/frame 63.png" // Replace with your image path
              alt="Dress Style 4"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;