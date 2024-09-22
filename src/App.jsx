import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './Components/Background'
import Foreground from './Components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='relative h-screen w-full bg-zinc-800'>
     <Background/>
    <Foreground/>
    </div>
    
    </>
  )
}

export default App
