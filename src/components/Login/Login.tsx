import { useState } from 'react'

export const Login = () => {

  const [isLogged, setIsLogged] = useState(false);

  return (
    isLogged 
    ? 
      <h1>Welcome</h1>
    :
    <button onClick={() => setIsLogged(true)}>
      Login
    </button>
  )
}
