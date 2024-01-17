import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoMdFilm } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import "./SideBar.scss";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useUserContext } from "../../../../Components/Context/UserContext";
export default function SideBar() {
  const [isExpended, setisExpended] = useState(false);
  const navigate = useNavigate();
  const { handleSignout } = useUserContext();
  const handleSignoutSwal = () => {
    Swal.fire({
      title: 'Bạn muốn đăng xuất?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Đồng ý',
      cancelButtonText: `Hủy`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Đã đăng xuất!', '', 'success')
        handleSignout()
        navigate("/")
      } else if (result.isDenied) {
        return
      }
    })
  }
  return (
    <div className={isExpended ? "containerNavBar" : "containerNavBar containerNavBarNX"}>
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpended && (
            <div className="nav-brand">
              <img src="https://demo1.cybersoft.edu.vn/logo.png" alt="" style={backgroundcolor:white} />
            </div>
          )}
          <div onClick={() => setisExpended(!isExpended)} className={isExpended ? "hamburger hamburger-in" : "hamburger hamburger-out"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="nav-menu">
          <div className={isExpended ? "nav-info-user" : "nav-info-user-none"}>
            <img src="https://free.clipartof.com/855-Free-Clipart-Of-A-Male-Avatar.png" />
            <p>name</p>
            <p>email</p>
          </div>

          <div className="nav-content">
            <div className={isExpended ? "nav-item" : "nav-item nav-item-in"}>
              <div className="nav-icon" onClick={() => navigate("/manage-admin/User")}>
                <FaUser size={20} />
              </div>
              {isExpended && <a onClick={() => navigate("/manage-admin/User")}>Quản Lý Người Dùng</a>}
            </div>
            <div className={isExpended ? "nav-item" : "nav-item nav-item-in"} onClick={() => navigate("/manage-admin/Movie")}>
              <div className="nav-icon">
                <IoMdFilm size={20} />
              </div>
              {isExpended && <a onClick={() => navigate("/manage-admin/Movie")}>Quản Lý Phim </a>}
            </div>
            <div className={isExpended ? "nav-item" : "nav-item nav-item-in"} onClick={handleSignoutSwal}>
              <div className="nav-icon">
                <IoLogOutOutline width={20} />
              </div>
              {isExpended && <a onClick={handleSignoutSwal}>Đăng xuất</a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
