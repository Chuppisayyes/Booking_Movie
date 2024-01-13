import React from "react";
import "./Header.scss";
export default function HeaderManage({ onOpen }) {
  return (
    <>
      <div className="manage-user-heading">
        <button onClick={() => onOpen(true)} className="button-modal">
          Thêm
        </button>
      </div>
    </>
  );
}
