import React from 'react'

const Counter = ({ number }) => {
  return (
    <div className='flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg shadow-md w-64 mx-auto mt-10'>
      <h1 className='text-xs'>Counter.jsx</h1>
      <h1 className='text-2xl font-bold'>{number}</h1>
    </div>
  )
}

export default Counter