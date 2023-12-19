import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter, useSearchParams } from 'react-router-dom'
import ROUTES from './routes/index.routes.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './redux/Slice/dataSlice.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter(ROUTES)


function App() {
const dispatch=useDispatch()
useEffect(()=>{
dispatch(getData())
},[])
  return (

    <div>
      <RouterProvider router={router} />
    </div>

  )
}

export default App
