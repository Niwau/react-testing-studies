import { useState } from "react"

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prevCount => prevCount+1)}>
        Increment
      </button>
    </div>
  )
}
