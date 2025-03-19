import React from 'react'

const layout = ({children}) => {
  return (
    <div className='p-20'>
        <div className='bg-yellow-600 font-bold '><span>You are vip members</span></div>
      {children}
    </div>
  )
}

export default layout
