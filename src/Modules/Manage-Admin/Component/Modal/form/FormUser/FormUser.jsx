import { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./FormUser.scss";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import { useToast } from "../../../Toast/ToastContext";
import { updateUser, addUser } from "../../../../../../Apis/userApi";
export default function FormUser({ reload, editUser, onClose, resetUser }) {
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
  const { showToast } = useToast();
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
      maNhom: "GP06",
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
      maNhom: "GP06",
      maLoaiNguoiDung: editUser?.maLoaiNguoiDung,
      hoTen: editUser?.hoTen,
    });
  }, [editUser]);

  const handleAdd = async (user) => {
    try {
      const reps = await addUser(user);
      if (reps) {
        showToast("Add User Successs");
      } else {
        showToast("Add User Fail");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = async (user) => {
    try {
      const reps = await updateUser(user);
      if (reps) {
        showToast("Update User Successs");
      } else {
        showToast("Update User Fail");
      }
    } catch (error) {
      console.error(error);
    } finally {
      resetUser(null);
    }
  };

  const handleAddUser = (user) => {
    if (editUser) {
      handleUpdate(user);
      onClose(false);
    } else if (!editUser) {
      handleAdd(user);
    }
    onClose(false);
    reload(1);
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
          placeholder="GP06"
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
              defaultValue=""
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
      {editUser && (
        <button style={{ marginTop: "20px" }} type="submit" className="btn btn-success">
          update
        </button>
      )}
      {!editUser && (
        <button style={{ marginTop: "20px" }} type="submit" className="btn btn-success">
          Add
        </button>
      )}
    </Box>
  );
}
