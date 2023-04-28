import React from "react";

const Loading = () => {
  const tempProducts = Array.from({ length: 13 }, (_, index) => {
    return (
      <div
        className="mx-2 p-2 flex justify-center items-center flex-col w-40 h-72 md:w-52 md:h-80"
        key={index}
      >
        <div className="bg-gray-200 animate-pulse rounded-2xl w-[150px] h-[150px] md:w-[180px] md:h-[180px]"></div>
        <div className="w-full mt-2">
          <div className="bg-gray-200 animate-pulse w-16 h-4 rounded-full"></div>
          <div className=" bg-gray-200 animate-pulse w-full h-2 rounded-full"></div>
          <div className="bg-gray-200 animate-pulse w-16 h-2 rounded-full"></div>
          <div className="bg-gray-200 animate-pulse w-12 h-4 rounded-full mt-[6px] text-right"></div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="w-full h-[450px] md:h-[500px] rounded-2xl mb-10 bg-gray-200 animate-pulse"></div>
      <div>
        <div className="mb-2 leading-6 w-20 h-2 rounded-full bg-gray-200"></div>
        <div className="mb-16">
          <div className="mb-2 leading-6 w-24 h-6 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="mb-2 leading-6 w-28 h-3 rounded-full bg-gray-200 animate-pulse"></div>
          <div className="flex flex-wrap justify-center gap-4 mt-5 w-full">
            {tempProducts}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
