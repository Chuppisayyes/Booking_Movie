import React, { useEffect, useState } from "react";
import "./ManageUser.scss";
import { getListUser } from "../../../../Apis/userApi";
import InputFind from "../InputFind";
import Header from "../Header";
import ModalUser from "../Modal/ModalUser";
export default function ManageUser() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (value) => {
    setIsOpen(value);
  };
  const handleClose = (value) => {
    setIsOpen(value);
  };
  useEffect(() => {
    const listUser = async () => {
      try {
        const resp = await getListUser();

        setUsers(resp);
      } catch (error) {
        console.error(error);
      }
    };
    listUser();
  }, []);
  return (
    <div className="container-user-left">
      <ModalUser onOpen={isOpen} onClose={handleClose} />
      <div className="manage-user-content">
        <Header onOpen={handleOpen} />
        <InputFind />
        <div className="manage-user-footer">
          <div className="manage-showing-table">
            <table className="table table-secondary">
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
              <tbody className="tbody">
                {users.map((user) => (
                  <tr className="tr-hover" key={users.taiKhoan}>
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDT}</td>
                    <td>{user.matKhau}</td>
                    <td>
                      <button className="btn btn-success">Edit</button>
                      <button className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
