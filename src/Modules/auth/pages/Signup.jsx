import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { signupAPI } from "../../../Apis/userApi";

const validationSchema = object({
  taiKhoan: string().required("tai khoan khong duoc de trong"),
  matKhau: string()
    .required("Mật Khẩu Không Được Để Trống")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Mật khẩu bắt buộc phải có 1 ký tự hoa, thường và đặt biet"),
  email: string().required("khong duoc de trong").email("email khong dung dinh dang"),
  hoTen: string().required("khong duoc de trong"),
  soDt: string().required("khong duoc de trong"),
});
export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { taiKhoan: "", matKhau: "", email: "", soDt: "", hoTen: "" },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  const handleSignUp = async (values) => {
    try {
      setIsLoading(true);
      setError(null);
      await signupAPI(values);
      navigate("/sign-in");
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <p>isloading...</p>;
  }
  return (
    <div className="container">
      <h1>Sign-up</h1>
      <form noValidate onSubmit={handleSubmit(handleSignUp)}>
        <div>
          <label htmlFor="">tai khoan</label>
          <input {...register("taiKhoan")} />
          {errors.taiKhoan && errors.taiKhoan.message}
        </div>
        <div>
          <label htmlFor="">mat khau</label>
          <input type="password" {...register("matKhau")} />
          {errors.matKhau && errors.matKhau.message}
        </div>
        <div>
          <label htmlFor="">ho ten</label>
          <input {...register("hoTen")} />
          {errors.hoTen && errors.hoTen.message}
        </div>
        <div>
          <label htmlFor="">email</label>
          <input type="email" {...register("email")} />
          {errors.email && errors.email.message}
        </div>
        <div>
          <label htmlFor="">SDT</label>
          <input {...register("soDt")} />
          {errors.soDt && errors.soDt.message}
        </div>
        {error && <p>{error}</p>}
        <button disabled={isLoading} type="submit">
          Sign-up
        </button>
      </form>
    </div>
  );
}
