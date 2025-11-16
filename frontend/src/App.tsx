// import { useState, useEffect } from 'react'
import ReviewList from './components/reviews/reviewList'
import { Button } from './components/ui/button'

function App() {
  

  // const apiUrl = import.meta.env.VITE_API_URL || ''

  

  return (
    <div className="h-screen w-full p-8">
    
      <ReviewList productId={2} />
    </div>
  )
}

export default App