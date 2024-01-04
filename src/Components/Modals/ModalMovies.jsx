import { IoMdClose } from "react-icons/io";
import ReactPlayer from "react-player";
import { useState } from "react";

import "./modal.css";
export default function StaticExample({ onClose, trailerMovie }) {
  return (
    <div className="modal container " style={{ display: "block" }}>
      <div className="overlay"></div>
      <div className="modal-header1" style={{ position: "relative" }}>
        <button className="btn-close1" onClick={() => onClose(false)}>
          <IoMdClose />
        </button>
      </div>
      <div className="modal-content1">
        <ReactPlayer controls url={trailerMovie} playing width="90%" height="100%" />
      </div>
    </div>
  );
}
