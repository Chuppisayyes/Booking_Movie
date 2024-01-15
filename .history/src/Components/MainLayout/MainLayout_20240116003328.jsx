import React from "react";
import Header from "../";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
