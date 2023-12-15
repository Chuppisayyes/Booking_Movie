import React from "react";
import { useForm } from "react-hook-form";

export default function Signin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "all",
  });
  const handleSignin = (values) => {
    console.log(values);
  };
  const handleError = (error) => {
    console.log(error);
  };
  return (
    <div>
      <h1>Sigin</h1>
      <form onSubmit={handleSubmit(handleSignin, handleError)}>
        <div>
          <label htmlFor="">Tai khoan</label>
          <input {...register("taiKhoan", { required: { value: true, message: "Tài Khoản Không Được Để Trống" } })} />
          {errors.taiKhoan && <span>{errors.taiKhoan.message}</span>}
        </div>
        <div>
          <label htmlFor="">Mật Khẩu</label>
          <input
            type="number"
            {...register("matKhau", {
              valueAsNumber: true,
              required: { value: true, message: "Mật Khẩu Không Được Để Trống" },
              pattern: { value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, message: "Mật khẩu bắt buộc phải có 1 ký tự hoa, thường và đặt biết" },
            })}
          />
          {errors.matKhau && <span>{errors.matKhau.message}</span>}
        </div>
        <button type="submit">dang nhap</button>
      </form>
    </div>
  );
}
