import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import "./MainLayout.css"



const MainLayout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li> 
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default MainLayout