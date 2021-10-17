import React, { HTMLProps, useState } from "react";
import { CALL_ROUTE } from "../contants";
import { useFetchCalls } from "../hooks/useFetchCalls";
import { archiveCall } from "../utils/archiveCall";
import { ActivityFeed } from "./ActivityFeed";
import { ArchiveCallsButton } from "./ArchiveCallsButton";
import { BasicModal } from "./BasicModal";

type InboxProps = HTMLProps<HTMLDivElement> & {};

export const Inbox: React.FC<InboxProps> = ({ ...props }) => {
  const { calls, setCalls, loading: callsLoading } = useFetchCalls(CALL_ROUTE);
  const [isOpen, setIsOpen] = useState(false);

  const archiveCalls = () => {
    if (calls !== null && calls.length > 0) {
      const tmp_calls = [...calls];
      tmp_calls.forEach((call) => {
        archiveCall(call);
        call.is_archived = true;
      });
      setCalls(tmp_calls);
    }
    setIsOpen(true);
  };

  return (
    <div {...props}>
      <BasicModal
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        buttonText={"Close"}
        text="Your calls have been archived."
        title="Success"
      />
      <ArchiveCallsButton onClick={archiveCalls} />
      {callsLoading ? <p>loading..</p> : <ActivityFeed calls={calls} />}
    </div>
  );
};
