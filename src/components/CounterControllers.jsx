import React from 'react'

const CounterControllers = ({ setNumber }) => {
  return (
    <div className='flex justify-center space-x-4 mt-5'>
      <button
        onClick={() => { setNumber(prev => prev - 1) }}
        className='px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition cursor-pointer'
      >
        Decrease

      </button>
      <button
        onClick={() => { setNumber(prev => prev + 1) }}
        className='px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition cursor-pointer'
      >
        Increase
      </button>
    </div>
  )
}

export default CounterControllers