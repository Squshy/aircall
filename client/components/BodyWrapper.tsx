import React from 'react'

interface BodyWrapperProps {

}

export const BodyWrapper: React.FC<BodyWrapperProps> = ({children}) => {
    return (<div className="w-full px-3">{children}</div>);
}