import React from "react";

interface CenterFooterButtonThingProps {}

export const CenterFooterButtonThing: React.FC<CenterFooterButtonThingProps> =
  ({}) => {
    const whiteDots = () => {
      const dots = [];
      for (let i = 0; i < 9; i++) {
        dots.push(<div className="rounded-full h-2 w-2 bg-white m-0.5" />);
      }
      return dots;
    };
    return (
      <div className="absolute bg-white border border-gray-300 shadow-sm rounded-full h-20 w-20 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 p-2">
        <div className="h-full w-full rounded-full bg-green-500 py-4 px-3">
          <div className="flex flex-wrap -m-0.5 items-center justify-center">{whiteDots()}</div>
        </div>
      </div>
    );
  };
