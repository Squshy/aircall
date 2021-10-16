import React from "react";

interface CallDividerProps {
  text: string;
}

export const CallDivider: React.FC<CallDividerProps> = ({ text }) => {
  return (
    <div >
      <div className="text-center w-full h-4 border-b-2 border-dotted border-gray-300">
        <span className="px-4 bg-white text-gray-400 font-semibold text-xs">{text}</span>
      </div>
    </div>
  );
};
