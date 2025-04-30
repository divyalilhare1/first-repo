
import './App.css'
import Navbar from './assets/Navbar'
import Home from './assets/Home'
import About from './assets/About'
import Login from './assets/Login'
import Help from './assets/Help'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element:<>
      <Navbar />
      <Home />
      </>
    },

    {
      path: "/about",
      element:<>
      <Navbar />
      <About />
      </>
    },
    {
      path: "/login",
      element:<>
      <Navbar />
      <Login />
      </>
    },
    {
      path:"/help",
      element:<>
      <Navbar />
      <Help />
      </>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
