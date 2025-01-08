import React, { useState } from 'react'

const App = () => {
  let [count, setCount] = useState(10)
  
  const addvalue = ()=> setCount(count+1)
  const removevalue = ()=> setCount(count-1)
  const resetvalue = ()=> setCount(0)

  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addvalue}>Add</button>
      <br />
      <button onClick={removevalue}>Remove</button>
      <br />
      <button onClick={resetvalue}>Reset</button>
      </>
  )
}

export default App
