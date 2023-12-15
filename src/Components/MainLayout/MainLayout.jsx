import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div>
      MainLayout
      <Header />
      <Outlet />
    </div>
  );
}
