import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./FormUser.scss";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, number } from "yup";
export default function FormUser({ editUser }) {
  const validationSchema = object({
    taiKhoan: string().required("Tài Khoản Không Được Để Trống"),
    hoTen: string()
      .required("Tài Khoản Không Được Để Trống")
      .max(12, "Chỉ Có Tối Đa 12 Ký Tự")
      .min(5, "Có Ít Nhất 5 Ký Tự"),
    matKhau: string()
      .required("Mật Khẩu Không Được Để Trống")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Mật khẩu có 8 ký tự ít nhất 1 ký tự hoa 1 ký tự thường và 1 ký tự số "
      ),
    email: string().required("Emai Không Được Để Trống").email("Emai Không Đúng Định Dạng"),
    soDT: string().required("SDT Không Được Để Trống"),
    maNhom: string().required("Không Được Để Trống").max(4, "Tối Đa 4 ký tự"),
    maLoaiNguoiDung: string().required("Loại Người Dùng Không Được Để Trống"),
  });
  const currencies = [
    {
      value: "KhachHang",
      label: "KhachHang",
    },
    {
      value: "QuanTri",
      label: "QuanTri",
    },
  ];
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
    control,
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP09",
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    reset({
      taiKhoan: editUser?.taiKhoan,
      matKhau: editUser?.matKhau,
      email: editUser?.email,
      soDT: editUser?.soDT,
      maNhom: "GP09",
      maLoaiNguoiDung: editUser.maLoaiNguoiDung,
      hoTen: editUser?.hoTen,
    });
  }, [editUser]);
  const handleAddUser = (user) => {
    console.log(user);
  };
  return (
    <Box
      onSubmit={handleSubmit(handleAddUser)}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "90%", height: "30px" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="form-item">
        <TextField
          {...register("taiKhoan")}
          error={!!errors.taiKhoan}
          label="Tài Khoản"
          variant="standard"
          helperText={errors?.taiKhoan?.message}
          autocomplete="username"
        />
      </div>
      <div className="form-item">
        <TextField
          type="password"
          {...register("matKhau")}
          error={!!errors.matKhau}
          label="Mật Khẩu"
          helperText={errors?.matKhau?.message}
          variant="standard"
          autoComplete="current-password"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("hoTen")}
          error={!!errors.hoTen}
          label="Họ Và Tên"
          helperText={errors?.hoTen?.message}
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("email")}
          error={!!errors.email}
          label="Email"
          helperText={errors?.email?.message}
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("soDT")}
          error={!!errors.soDT}
          label="Số Điện Thoại"
          helperText={errors?.soDT?.message}
          variant="standard"
        />
      </div>
      <div className="form-item">
        <TextField
          {...register("maNhom")}
          error={!!errors.maNhom}
          label="Mã Nhóm"
          helperText={errors?.maNhom?.message}
          variant="standard"
          placeholder="GP09"
        />
      </div>
      <div className="form-item">
        {/* <TextField
          {...register("maLoaiNguoiDung")}
          name="maLoaiNguoiDung"
          error={!!errors.maLoaiNguoiDung}
          select
          label="Loại Người Dùng"
          helperText={errors?.maLoaiNguoiDung?.message}
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField> */}
        <Controller
          control={control}
          name="maLoaiNguoiDung"
          defaultValue=""
          rules={{ required: "Vui lòng chọn loại người dùng" }}
          render={({ field }) => (
            <TextField
              {...field}
              error={!!errors.maLoaiNguoiDung}
              select
              label="Loại Người Dùng"
              helperText={errors?.maLoaiNguoiDung?.message}
              variant="standard"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </div>
      <button style={{ marginTop: "20px" }} type="submit" className="btn btn-success">
        Add
      </button>
    </Box>
  );
}
