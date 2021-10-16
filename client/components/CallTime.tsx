import { DotsVerticalIcon } from "@heroicons/react/solid";
import React from "react";
import { dateToAMPM } from "../utils/dateToAMPM";

interface CallTimeProps {
  time: string;
}

export const CallTime: React.FC<CallTimeProps> = ({ time }) => {
  const date = dateToAMPM(time)
  console.log(date)
  return (
    <div>
      <DotsVerticalIcon className="w-3 h-4" />
      {time}
    </div>
  );
};
