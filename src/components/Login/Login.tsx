import { useEffect, useState } from 'react'

export const Login = () => {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLogged(true), 500);
  }, [])

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
