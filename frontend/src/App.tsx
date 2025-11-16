// import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'

function App() {
  

  // const apiUrl = import.meta.env.VITE_API_URL || ''

  

  return (
    <div className="flex justify-center bg-red-100">
      <h1>Monorepo App</h1>
      <p>Message from API: </p>
      <Button>Click me</Button>
    </div>
  )
}

export default App