import React from "react";
import { Link, Outlet } from "react-router-dom";

const dashboard = () => {
  return (
    <div>
      <nav>
        <Link to="/profile">Profile</Link>
        <Link to="/setting">Setting</Link>
      </nav>
      <Outlet/>
    </div>
  );
};

export default dashboard;
