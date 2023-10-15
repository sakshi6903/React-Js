import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
//HOOKS
function App() {
  const[ counter , setCounter ] =useState(15);

  const addValue = () => {
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    //use state send alll data in batches so it will include in one batch ani others will not work
    //if we want to work this:
    // setCounter((prevCounter) => prevCounter+1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
    <h1>COUNTER PROJECT</h1>
    <h2>Counter Value:{counter} </h2>

    <button onClick={addValue}>Add Value</button><br/><br/>
    <button onClick={removeValue}>Subtract Value</button>
      
    </>
  )
}

export default App
