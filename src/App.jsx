import React  from 'react'
import Table from './component/Table'
import Login from './component/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/nav';

function App() {


  return (
    <>
   
   <BrowserRouter>
   <Nav />
    <Routes>
    <Route  exact path="/" element={<Table />} />
    <Route  path="/login" element={<Login />} />
    </Routes >
    </BrowserRouter>
    </>
  )
}

export default App
