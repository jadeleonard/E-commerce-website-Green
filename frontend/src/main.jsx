import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import SignUp from './publicpages/SignUp.jsx';
import SignIn from './publicpages/SignIn.jsx';
import About from './publicpages/About.jsx';





const router  = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/sign-up",
    element:<SignUp />
  },
  {
    path:"/sign-in",
    element:<SignIn />
  },
  {
    path:"/about",
    element:<About />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
