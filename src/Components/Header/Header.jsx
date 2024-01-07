import React from "react";
import "./header.min.css";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="header-container">
          <div className="hd-flex">
            <div className="hd-left">
              <img src="https://demo1.cybersoft.edu.vn/logo.png" alt="logo" />
            </div>
            <nav className="hd-mid nav">
              <a href="#" className="nav-item is-active">
                <h6>Lịch Chiếu</h6>
              </a>
              <a href="#" className="nav-item">
                <h6>Cụm Rạp</h6>
              </a>
              <a href="#" className="nav-item">
                <h6>Tin Tức</h6>
              </a>
              <a href="#" className="nav-item">
                <h6>Ứng Dụng</h6>
              </a>
            </nav>
            <div className="hd-right">
              <a justify="flex-end" class="jss11" item="true" lg="6" href="/sign-in">
                <svg class="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </svg>
                <h6 class="MuiTypography-root MuiTypography-h3">Đăng Nhập</h6>
              </a>
              <a justify="flex-end" class="jss11" item="true" lg="6" href="/sign-up">
                <svg class="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                </svg>
                <h6 class="MuiTypography-root MuiTypography-h3">Đăng Ký</h6>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
