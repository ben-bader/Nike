import React from 'react'

const Button = ({title,className,icon}) => {
  return (
    <button className={className}>
    {icon &&
    <img src={icon} alt="" className='ml-2 rounded-full w-5 h-5'/>}
      {title}
    </button>
  )
}

export default Button
