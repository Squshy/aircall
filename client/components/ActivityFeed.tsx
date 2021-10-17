import { Fragment, HTMLProps } from "react";
import { Call as CallType } from "../types";
import { dateToMonthDayYear } from "../utils/dateToMonthDayYear";
import { BodyWrapper } from "./BodyWrapper";
import { Call } from "./Call";
import { CallDivider } from "./CallDivider";

type ActivityFeedProps = HTMLProps<HTMLDivElement> & {
  calls: CallType[] | null;
  showArchived?: boolean;
};

export const ActivityFeed: React.FC<ActivityFeedProps> = ({
  showArchived = false,
  calls,
  ...props
}) => {
  // hold previously viewed dates
  const timeSet = new Set<string>();
  return (
    <div {...props}>
      <div className="flex flex-col space-y-4">
        {calls?.map((call) => {
          if (showArchived === false) if (call.is_archived) return null;
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
    </div>
  );
};
