import {
  CogIcon,
  PhoneIcon,
  TruckIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import { resetCalls } from "../utils/resetCalls";
import { CenterFooterButtonThing } from "./CenterFooterButtonThing";

interface FooterProps {}

const COMMON_ICON_STYLES = "w-8 h-8 text-gray-400";

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="fixed bottom-0 w-full h-18">
      <div className="relative w-full border-t border-gray-300 bg-white">
        <CenterFooterButtonThing />
        <div className="flex justify-between w-full">
          <div className="flex w-1/3 p-4 justify-between">
            <PhoneIcon className={COMMON_ICON_STYLES} />
            <UserIcon className={COMMON_ICON_STYLES} />
          </div>

          <div className="flex w-1/3 justify-end p-4 justify-between">
            <CogIcon className={COMMON_ICON_STYLES} />
            <button onClick={resetCalls}>
              <TruckIcon className={COMMON_ICON_STYLES} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
