import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { MovieProvider } from './context/context'



function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router}/>
    </MovieProvider>
  )
}

export default App



