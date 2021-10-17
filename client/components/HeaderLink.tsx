import React from "react";

interface HeaderLinkProps {
  active?: boolean;
  text?: string;
  onClick?: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
  active,
  onClick,
  text,
  children,
}) => {
  return (
    <button
      className={`${
        active && "border-b-4 border-red-500"
      } h-full flex items-center text-center`}
      onClick={onClick}
    >
      {text && (
        <p
          className={`text-sm ${
            active ? "font-bold text-gray-700" : "font-semibold text-gray-500"
          }`}
        >
          {text}
        </p>
      )}
      {children}
    </button>
  );
};
