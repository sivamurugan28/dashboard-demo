import { Suspense, lazy, useEffect, useState } from 'react'
import './App.css';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/joy/CircularProgress';
const Dashboard = lazy(() => import("./pages/Dashboard"))

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard")
    }
  }, [location.pathname, navigate])

  return (
    <Suspense fallback={<div style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}> <CircularProgress size="lg" /></div>}>
      <Routes>
        <Route element={<Dashboard />} path='/dashboard' />
        <Route element={<div>initial component</div>} path='/' />
      </Routes>
    </Suspense>
  )
}

export default App
