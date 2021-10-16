import React from 'react'

interface BodyWrapperProps {
  className?: string;
}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({children,className}) => {
    return (<div className={`w-full px-3 ${className && className}`}>{children}</div>);
}