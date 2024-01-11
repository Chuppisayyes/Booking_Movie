import React from "react";
import "./ManageUser.scss";

import InputFind from "../InputFind";
import Header from "../Header";
export default function ManageUser() {
  return (
    <div className="container-user-left">
      <div className="manage-user-content">
        <Header />
        <InputFind />
        <div className="manage-user-footer">
          <div className="manage-showing">
            <table className="table">
              <thead>
                <tr>
                  <th>Tài Khoản</th>
                  <th>Họ Tên</th>
                  <th>Email</th>
                  <th>Số Điện Thoại</th>
                  <th>Loại Người Dùng</th>
                  <th>Chức Năng</th>
                </tr>
              </thead>
              <tbody>{}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
