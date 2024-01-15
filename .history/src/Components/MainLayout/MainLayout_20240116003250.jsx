import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <div>
      <header />
      <Outlet />
      <Footer />
    </div>
  );
}
