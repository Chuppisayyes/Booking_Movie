import React, { useEffect, useState, useRef } from "react";
import "./ManageUser.scss";
import { CiSearch } from "react-icons/ci";
import InputFind from "../InputFind";
import Header from "../Header";
import ModalUser from "../Modal/ModalUser";
import { findUser, getListUserPagination, getListUser, deleteUser } from "../../../../Apis/userApi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { set } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useToast } from "../Toast/ToastContext";
export default function ManageUser() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
  const timer = useRef();
  const { showToast } = useToast();
  const handleSearch = (evt) => {
    setSearchTerm(evt.target.value);

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebounceSearchTerm(evt.target.value);
    }, [500]);
  };
  useEffect(() => {
    getSearchTerm?.(debounceSearchTerm);
  }, [debounceSearchTerm]);
  const getSearchTerm = async (username) => {
    try {
      if (username === "") {
        listUser(1);
      } else {
        const reps = await findUser(username);
        setUsers(reps);
      }
    } catch (error) {}
  };
  const [totalPages, setTotalPages] = useState();
  const handleOpen = (value) => {
    setIsOpen(value);
  };
  const handleClose = (value) => {
    setIsOpen(value);
  };
  const handleEdit = async (userName) => {
    const resp = await getListUser();
    const user = resp.find((user) => user.taiKhoan === userName);
    setEditUser(user);
    setIsOpen(true);
  };

  useEffect(() => {
    listUser(1);
    showToast("Get List user successs");
  }, []);
  const listUser = async (pages) => {
    try {
      const reps = await getListUserPagination(pages, 8);

      setUsers(reps.items);
      setTotalPages(reps.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event, value) => {
    listUser(value);
  };
  const handleDelete = async (user) => {
    try {
      const reps = await deleteUser(user.taiKhoan);
      if (reps) {
        showToast("Delete success");
      } else {
        showToast("Delete fail");
      }
    } catch (error) {
      console.error(error);
    } finally {
      listUser(1);
    }
  };
  return (
    <div className="container-user-left">
      <ModalUser
        reload={listUser}
        onOpen={isOpen}
        onClose={handleClose}
        editUser={editUser}
        resetUser={() => setEditUser()}
      />
      <div className="manage-user-content">
        <Toaster />
        <Header onOpen={handleOpen} />
        <div className="manage-user-body">
          <div className="manage-user-find">
            <input onChange={handleSearch} value={searchTerm} placeholder="Tìm Kiếm Người Dùng" />
            <div className="manage-user-iconFind">
              <CiSearch width={50} />
            </div>
          </div>
        </div>
        <div className="manage-showing-table ">
          <div className="table-responsive">
            <table className="table table-secondary table-responsive">
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
                  <tr key={users.taiKhoan}>
                    <td>{user.taiKhoan}</td>
                    <td>{user.hoTen}</td>
                    <td>{user.email}</td>
                    <td>{user.soDt}</td>
                    <td>{user.maLoaiNguoiDung}</td>
                    <td>
                      <button onClick={() => handleEdit(user.taiKhoan)} className="btn btn-success">
                        Edit
                      </button>
                      <button onClick={() => handleDelete(user)} className="btn btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Stack style={{ display: "flex", alignItems: "center" }} spacing={2}>
              <Pagination
                onChange={handleChange}
                count={totalPages}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
