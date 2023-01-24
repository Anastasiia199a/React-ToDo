import React from 'react'
import { useState } from 'react'

export default function Test() {
   const [counter, setCounter] = useState(0);

  return (
    <div>
        <p>{counter}</p>
    <button onClick={()=> setCounter(counter + 1)}>+</button>
    <button onClick={()=> setCounter(counter === 0 ? counter : counter - 1)}>-</button>
    </div>
  )
}
