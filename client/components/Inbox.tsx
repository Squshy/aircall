import React, { HTMLProps, useState } from "react";
import { Call } from "../types";
import { ActivityFeed } from "./ActivityFeed";
import { ArchiveCallsButton } from "./ArchiveCallsButton";
import { BasicModal } from "./BasicModal";

type InboxProps = HTMLProps<HTMLDivElement> & {
  archiveCalls: () => void;
  loading: boolean;
  calls: Call[] | null;
};

export const Inbox: React.FC<InboxProps> = ({
  archiveCalls,
  calls,
  loading,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const archive = () => {
    archiveCalls();
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
      <ArchiveCallsButton onClick={archive} />
      {loading ? (
        <p>loading..</p>
      ) : (
        <ActivityFeed calls={calls} showInboundOnly />
      )}
    </div>
  );
};
