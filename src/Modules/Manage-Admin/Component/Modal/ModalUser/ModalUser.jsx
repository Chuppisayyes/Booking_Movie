import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import FormUser from "../form/FormUser/FormUser";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalUser({ onOpen, onClose }) {
  return (
    <div>
      <Modal
        open={onOpen}
        onClose={() => onClose(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="modalHeader">
            <h4>Add</h4>
          </div>
          <div className="modalBody">
            <FormUser />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
