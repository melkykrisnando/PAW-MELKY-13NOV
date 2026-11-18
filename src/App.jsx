import React from 'react'
import Counter from './components/Counter'
import ThemeSwap from './components/ThemeSwap'

const App = () => {
  return (
    <div>
      <h1>HELLO REACT</h1>
      <button className='btn btn-primary'>BUTTON EXAMPLE</button>
      <Counter/>
      <ThemeSwap/>
    </div>

    
  )
}

export default App