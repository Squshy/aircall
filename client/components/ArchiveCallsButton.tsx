import { ArchiveIcon } from "@heroicons/react/outline";
import React from "react";
import { BodyWrapper } from "./BodyWrapper";

interface ArchiveCallsButtonProps {
  onClick: () => void;
}

export const ArchiveCallsButton: React.FC<ArchiveCallsButtonProps> = ({
  onClick,
}) => {
  return (
    <BodyWrapper className="mt-2">
      <button
        className="w-full rounded-lg p-4 border border-gray-300 flex justify-start items-center bg-white"
        onClick={onClick}
      >
        <ArchiveIcon className="w-6 h-6 text-gray-500" />
        <p className="ml-2 text-gray-600 font-semibold text-sm">
          Archive all calls
        </p>
      </button>
    </BodyWrapper>
  );
};
