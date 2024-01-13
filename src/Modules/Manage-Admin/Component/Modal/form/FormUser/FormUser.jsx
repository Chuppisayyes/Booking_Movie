import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./FormUser.scss";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
export default function FormUser() {
  const currencies = [
    {
      value: "Khách Hàng",
      label: "Khách Hàng",
    },
    {
      value: "Quản Trị",
      label: "Quản Trị",
    },
  ];
  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      hoTen: "",
      email: "",
      soDT: "",
      matKhau: "",
      maLoaiNguoiDung: "",
    },
  });

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "90%" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-item">
        <TextField
          {...register("taiKhoan")}
          error
          id="standard-error-helper-text"
          label="Tài Khoản"
          helperText=""
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("matKhau")}
          error
          id="standard-error-helper-text"
          label="Mật Khẩu"
          helperText=""
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("hoTen")}
          error
          id="standard-error-helper-text"
          label="Họ Và Tên"
          helperText=""
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("email")}
          error
          id="standard-error-helper-text"
          label="Email"
          helperText=""
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("soDT")}
          error
          id="standard-error-helper-text"
          label="Số Điện Thoại"
          helperText=""
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("maLoaiNguoiDung")}
          error
          id="standard-select-currency"
          select
          label="Loại Người Dùng"
          helperText="Please select your currency"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <button type="submit" className="btn btn-success">
        Add
      </button>
    </Box>
  );
}
