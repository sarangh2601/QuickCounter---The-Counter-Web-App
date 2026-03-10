import React from 'react'
import { useState } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)

  const IncreaseCount = () => {
    setCounter(counter + 1);
  }

  const DecreaseCount = () => {
    if (counter === 0) return
    setCounter(counter - 1);
  }

  const ResetCount = () => {
    setCounter(0);
  }

  return (
    <div className='flex justify-center gap-5 h-screen py-20 border-2 bg-black'>
      <div className='flex border-t border-white rounded-2xl shadow-md shadow-white justify-center items-center p-10 w-[1250px] gap-20 sm:h-auto'>
        <div>
          <img src="./QuickCounter_logo.png" className='w-auto h-[60vh]' alt="" />
        </div>
        <div className='flex flex-col bg-blue-100 p-10 h-[55vh] justify-between items-center w-[70vh] rounded-xl'>
          <div className='flex flex-col gap-2'>
            <h1 className='bg-white rounded-xl shadow-xl flex items-center justify-center h-[30vh] text-7xl font-bold'>{counter}</h1>
            <div className='flex justify-between mt-10 gap-9 w-[90%] '>
              <button className='border px-8 py-3 rounded-3xl uppercase bg-green-500' onClick={IncreaseCount}>Increase</button>
              <button className='border px-8 py-3 rounded-3xl uppercase bg-red-500' onClick={DecreaseCount}>Decrease</button>
              <button className='border px-8 py-3 rounded-3xl uppercase bg-black text-white' onClick={ResetCount}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App