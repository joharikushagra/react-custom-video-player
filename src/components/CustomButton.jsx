import React from 'react'

const CustomButton = ({onClick,children}) => {
  return (
    <div onClick={onClick} className={`bg-none border-none outline-none h-8 w-8 p-0 text-lg cursor-pointer opacity-85 flex justify-center items-center`}>
        {children}
    </div>
  )
}

export default CustomButton