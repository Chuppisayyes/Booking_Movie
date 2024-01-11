import React from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";
import "./MainLayoutManage.scss";
export default function MainLayoutManage() {
  return (
    <div className="mainlayout">
      <SideBar />
      <Outlet />
    </div>
  );
}
