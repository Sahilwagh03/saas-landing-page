import React from 'react'

const SectionHeader = ({ children, className = "" }) => {
  return (
    <h2 className={`text-4xl font-semibold ${className}`}>
      {children}
    </h2>
  )
}

const SectionDescription = ({children,className=""})=>{
  return(
    <p className={`text-[#A6A6A6] text-sm ${className}`}>
      {children}
    </p>
  )
}

export { SectionHeader ,SectionDescription}