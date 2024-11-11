import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import {
  Toolbar,
} from "@mui/material";

const drawerWidth = 300;
const Layout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex bg-[#f9f9f9] w-screen h-screen overflow-y-scroll fixed py-8 px-4">
      {/* navbar */}
      <Navbar drawerWidth={`${menuOpen ? `${drawerWidth}px` : "80px"}`} />
      {/* sidebar */}
      <Sidebar drawerWidth={drawerWidth} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="w-full">
        <Toolbar></Toolbar>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
