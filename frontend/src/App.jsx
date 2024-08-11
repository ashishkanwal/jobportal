import { useState } from 'react'
import './App.css'
import Navbar from './components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
const approuter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
   {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // },
  // {
  //   path:'/',
  //   element:<Home/>
  // }
])

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
  <RouterProvider router = {approuter}/>
   </div>
  )
}

export default App
