import React from "react";
import { Call as CallType } from "../types";
import { PhoneIncomingIcon } from "@heroicons/react/solid";
import { CallTime } from "./CallTime";

interface CallProps {
  call: CallType;
}

export const Call: React.FC<CallProps> = ({ call }) => {
  return (
    <div className="w-full rounded-md border border-gray-300 py-2 px-4 flex items-center justify-between">
      <PhoneIncomingIcon className="w-4 h-4 text-gray-400" />
      <div>
        <p>{call.from}</p>
        <p>tried to call on {call.via}</p>
      </div>
      <CallTime time={call.created_at} />
    </div>
  );
};
