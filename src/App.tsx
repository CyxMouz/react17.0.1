import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </Box>
  )
}

export default App
