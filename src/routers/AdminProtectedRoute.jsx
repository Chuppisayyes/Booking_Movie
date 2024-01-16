import React from "react";
import { useUserContext } from "../Components/Context/UserContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminProtextedRoute({ children }) {
  const { currentUser, handleSignout } = useUserContext();
  const location = useLocation();

  if (!currentUser) {
    const url = `/sign-in?redirectTo=${location.pathname}`;
    return <Navigate to={url} replace />;
  }
  if (currentUser && currentUser.maLoaiNguoiDung !== "QuanTri") {
    Swal.fire({
      icon: "error",
      title: "Không có quyền truy cập!",
      text: "Vui lòng đăng nhập tài khoản quản trị.",
    });
    handleSignout();
    const url = `/sign-in?redirectTo=${location.pathname}`;
    return <Navigate to={url} replace />;
  }
  return children || <Outlet />;
}
