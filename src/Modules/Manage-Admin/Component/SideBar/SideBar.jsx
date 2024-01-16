import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdFilm } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import "./SideBar.scss";
import { Link } from "react-router-dom";
export default function SideBar() {
  const [isExpended, setisExpended] = useState(false);
  const storedData = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className={isExpended ? "containerNavBar" : "containerNavBar containerNavBarNX"}>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <img src="https://demo1.cybersoft.edu.vn/logo.png" alt="" />
            </div>
          )}
          <div
            onClick={() => setisExpended(!isExpended)}
            className={isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="nav-menu">
          <div className={isExpended ? "nav-info-user" : "nav-info-user-none"}>
            <img src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.png" />
            <p>{storedData.taiKhoan}</p>
            <p>{storedData.email}</p>
          </div>

          <div className="nav-content ">
            <Link to="/admin/User" className={isExpended ? "nav-item" : "nav-item nav-item-in"}>
              <div className="nav-icon">
                <FaUser size={20} />
              </div>
              {isExpended && <a>Quản Lý Người Dùng</a>}
            </Link>
            <Link to="/admin/Movie" className={isExpended ? "nav-item" : "nav-item nav-item-in"}>
              <div className="nav-icon">
                <IoMdFilm size={20} />
              </div>
              {isExpended && <a>Quản Lý Phim </a>}
            </Link>
            <div className={isExpended ? "nav-item" : "nav-item nav-item-in"}>
              <div className="nav-icon">
                <IoLogOutOutline width={20} />
              </div>
              {isExpended && <a>Đăng xuất</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
