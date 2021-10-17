import { AdjustmentsIcon, DotsVerticalIcon } from "@heroicons/react/outline";
import React, { Dispatch, SetStateAction } from "react";
import { Logo } from "../svg/logo";
import { HeaderLink } from "./HeaderLink";

interface HeaderProps {
  currentPage: string;
  updatePage: Dispatch<SetStateAction<"inbox" | "all">>;
}

const COMMON_ICON_STYLES = "w-4 h-4 text-gray-400";

export const Header: React.FC<HeaderProps> = ({ currentPage, updatePage }) => {
  return (
    <div className="w-full h-16 bg-white border-b border-gray-300 shadow-sm flex flex-row justify-between pt-1 px-1">
      <Logo className="h-full w-28 ml-2" />
      <div className="bg-gray-100 h-full px-4 flex items-center border-t border-l border-r rounded-tl-md rounded-tr-md border-gray-300">
        <HeaderLink
          onClick={() => updatePage("inbox")}
          text="Inbox"
          active={currentPage === "inbox"}
        />
        <DotsVerticalIcon className={`${COMMON_ICON_STYLES} mx-2`} />
        <HeaderLink
          onClick={() => updatePage("all")}
          text="All calls"
          active={currentPage === "all"}
        />
        <DotsVerticalIcon className={`${COMMON_ICON_STYLES} mx-2`} />
        <HeaderLink onClick={() => updatePage("all")}>
          <AdjustmentsIcon className="h-6 w-6 text-gray-600" />
        </HeaderLink>
      </div>
    </div>
  );
};
