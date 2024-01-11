import React from "react";
import "./ManageUser.scss";
import { CiSearch } from "react-icons/ci";
export default function ManageUser() {
  return (
    <div className="container-user-left">
      <div className="manage-user-content">
        <div className="manage-user-heading">
          <button className="button-modal">Thêm</button>
        </div>
        <div className="manage-user-body">
          <div className="manage-user-find">
            <input placeholder="Tìm Kiếm Người Dùng" />
            <div className="manage-user-iconFind">
              <CiSearch width={50} />
            </div>
          </div>
        </div>
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
