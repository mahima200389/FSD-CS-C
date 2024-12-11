import React from "react";
import { Link, Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <nav>
        <Link to="/counter">Counter App</Link>
        <Link to="/image">Image App</Link>
      </nav>
      <Outlet />
      <footer>Copyright &copy; 2023</footer>
    </div>
  );
};

export default MainLayout;
