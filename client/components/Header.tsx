import React from "react";
import { Logo } from "../svg/logo";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="w-full h-16 bg-white border-b border-gray-300 shadow-sm">
      <Logo className="h-full w-28 ml-2" />
    </div>
  );
};
