import React from "react";
import { Call as CallType } from "../types";
import { Call } from "./Call";

interface ActivityFeedProps {
  calls: CallType[] | null;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ calls }) => {
  if (calls === null) return <div>No calls to display.</div>;
  return (
    <div className="flex flex-col space-y-4 p-4">
      {calls.map((call) => {
        return <Call key={call.id} call={call} />;
      })}
    </div>
  );
};
