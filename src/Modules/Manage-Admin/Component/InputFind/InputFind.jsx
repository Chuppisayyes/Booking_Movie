import React from "react";
import "./InputFind.scss";
import { CiSearch } from "react-icons/ci";

export default function InputFind() {
  return (
    <div className="manage-user-body">
      <div className="manage-user-find">
        <input placeholder="Tìm Kiếm Người Dùng" />
        <div className="manage-user-iconFind">
          <CiSearch width={50} />
        </div>
      </div>
    </div>
  );
}
