import React from "react";
import { Call as CallType } from "../types";
import { ArchiveIcon, PhoneIncomingIcon } from "@heroicons/react/solid";
import { CallTime } from "./CallTime";

interface CallProps {
  call: CallType;
}

export const Call: React.FC<CallProps> = ({ call }) => {
  return (
    <div className="w-full rounded-lg border border-gray-300 py-2 pl-2 flex justify-between bg-white">
      <div className="flex items-center px-2 space-x-3">
        <PhoneIncomingIcon className="w-4 h-4 text-gray-400" />
        <div>
          <p className="font-bold text-gray-600">{call.from}</p>
          <p className="text-sm text-gray-400">tried to call on {call.via}</p>
        </div>
      </div>
      <div className="flex items-center">
        {call.is_archived && <ArchiveIcon className="text-red-500 w-4 h-4" />}
        <CallTime time={call.created_at} />
      </div>
    </div>
  );
};
