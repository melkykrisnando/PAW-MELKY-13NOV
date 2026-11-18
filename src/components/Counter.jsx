import React, { useState } from 'react'

function Counter() {
    const [angka, setAngka] = useState(0)

    const handleIncrement = () => {
      setAngka(angka+1);
    }

    const handleDecrement = () => {
      setAngka(angka-1);
    }

    const handle0 = () => {
      setAngka(angka-angka);
    }
    
  return (
    <div>
        <div className='text-6xl font-bold'>{angka}</div>
        <button className='btn btn-primary' onClick={handleIncrement}>Increment</button>
        <button className='btn btn-primary' onClick={handleDecrement}>Decrement</button>
        <button className='btn btn-primary' onClick={handle0}>Reset Counter</button>
    </div>
  )
}

export default Counter