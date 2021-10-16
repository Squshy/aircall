import { Fragment } from "react";
import { Call as CallType } from "../types";
import { dateToMonthDayYear } from "../utils/dateToMonthDayYear";
import { BodyWrapper } from "./BodyWrapper";
import { Call } from "./Call";
import { CallDivider } from "./CallDivider";

interface ActivityFeedProps {
  calls: CallType[] | null;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ calls }) => {
  const timeSet = new Set<string>();
  
  return (
    <div className="flex flex-col space-y-4">
      {calls?.map((call) => {
        if (call.is_archived) return;
        const dateString = dateToMonthDayYear(call.created_at);
        if (!timeSet.has(dateString)) {
          timeSet.add(dateString);
          return (
            <Fragment key={call.id}>
              <CallDivider text={dateString} />
              <BodyWrapper>
                <Call call={call} />
              </BodyWrapper>
            </Fragment>
          );
        }
        return (
          <BodyWrapper key={call.id}>
            <Call call={call} />
          </BodyWrapper>
        );
      })}
    </div>
  );
};
