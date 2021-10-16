import { DotsVerticalIcon } from "@heroicons/react/solid";
import React from "react";
import { dateToAMPM } from "../utils/dateToAMPM";

interface CallTimeProps {
  time: string;
}

export const CallTime: React.FC<CallTimeProps> = ({ time }) => {
  const { time: callTime, AMPM } = dateToAMPM(time);
  return (
    <div className="flex justify-between items-center space-x-1">
      <DotsVerticalIcon className="w-4 h-4 text-gray-400" />
      <p className="text-gray-400 font-medium text-sm">{callTime}</p>
      <div className="border-b border-t border-l rounded-tl-md rounded-bl-md border-gray-300 py-px px-1">
        <p className="text-xs text-gray-400 font-bold">{AMPM}</p>
      </div>
    </div>
  );
};
