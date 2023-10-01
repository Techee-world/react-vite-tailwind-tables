import React  from 'react'
import Table from './component/Table'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
   
   <BrowserRouter>
   
    <Routes>
    <Route  path="/login" element={<Login />} />
    <Route  path="/table" element={<Table />} />
    </Routes >
    </BrowserRouter>
    </>
  )
}

export default App
