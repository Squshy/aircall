import { Fragment, HTMLProps, useState } from "react";
import { Call as CallType } from "../types";
import { dateToMonthDayYear } from "../utils/dateToMonthDayYear";
import { BodyWrapper } from "./BodyWrapper";
import { Call } from "./Call";
import { CallDivider } from "./CallDivider";
import { CallModal } from "./CallModal";

type ActivityFeedProps = HTMLProps<HTMLDivElement> & {
  calls: CallType[] | null;
  showArchived?: boolean;
  showInboundOnly?: boolean;
};

export const ActivityFeed: React.FC<ActivityFeedProps> = ({
  showArchived = false,
  calls,
  showInboundOnly,
  ...props
}) => {
  // hold previously viewed dates
  const timeSet = new Set<string>();
  const [currentCall, setCurrentCall] = useState<CallType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const showCallDetails = (call: CallType) => {
    setCurrentCall(call);
    setIsOpen(true);
  };

  return (
    <div {...props}>
      {currentCall && (
        <CallModal
          call={currentCall}
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
        />
      )}
      <div className="flex flex-col space-y-4">
        {calls?.map((call) => {
          if (showArchived === false) if (call.is_archived) return null;
          if (showInboundOnly === true)
            if (call.direction === "outbound") return null;
          const dateString = dateToMonthDayYear(call.created_at);
          if (!timeSet.has(dateString)) {
            timeSet.add(dateString);
            return (
              <Fragment key={call.id}>
                <CallDivider text={dateString} />
                <BodyWrapper>
                  <Call call={call} onClick={() => showCallDetails(call)} />
                </BodyWrapper>
              </Fragment>
            );
          }
          return (
            <BodyWrapper key={call.id}>
              <Call call={call} onClick={() => showCallDetails(call)} />
            </BodyWrapper>
          );
        })}
      </div>
    </div>
  );
};
