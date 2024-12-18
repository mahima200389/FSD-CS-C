import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/Login';
function App() {
  const [store, setStore] = useState("");
  return (
    <div>
      {window.location.pathname !== "/dash" && <div>{JSON.stringify(store)}</div>}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />} >
            <Route path="/login" element={<Login regDataLogin={store} />} />
            <Route path="/register" element={<Register regData={setStore} />} />
          </Route>

        </Routes>
        <Routes>
          <Route path="/dash" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App