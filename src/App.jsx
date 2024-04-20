import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
const Dashboard = lazy(() => import("./pages/Dashboard"))

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(()=>{
    if(location.pathname === "/"){
      navigate("/dashboard")
    }
  },[location.pathname,navigate])

  return (
    <Suspense fallback={<div>loading</div>}>
      <Routes>
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<div>initial component</div>} path='/'/>
      </Routes>
    </Suspense>
  )
}

export default App
