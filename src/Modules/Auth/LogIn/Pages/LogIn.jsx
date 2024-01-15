import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { object, string } from "yup"
import { useMutation } from '@tanstack/react-query'
import { signin } from '../../../../Apis/userApi.js'
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { useUserContext } from '../../../../Components/Context/UserContext.jsx'
import style from './SigninStyle.module.css'
import { Avatar, Container, FormControl, TextField, InputAdornment, IconButton, Checkbox, Typography, Button, ThemeProvider } from '@mui/material'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';
import theme from '../../../../Components/ChangeMui/ChangeColor.js'
import Swal from 'sweetalert2'

const signupSchema = object({
  taiKhoan: string().required("Tài khoản không được để trống"),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
      "Mật khẩu ít nhất 8 ký tự, 1 kí tự hoa, 1 kí tự thường và 1 số"
    ),
})

export default function LogIn() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const { currentUser, handleSignin: onSigninSuccess } = useUserContext();

  const [searchParams] = useSearchParams();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    resolver: yupResolver(signupSchema),
    mode: "onTouched",
  });

  const {
    mutate: handleSignin,
    isLoading,
    error
  } = useMutation({
    mutationFn: (payload) => signin(payload),
    onSuccess: (data) => {
      onSigninSuccess(data);
    }
  })

  const onSubmit = (values) => {
    Swal.fire(
      'Đăng nhập thành công!',
      '',
      'success'
    )
    handleSignin(values);
  }

  if (currentUser) {
    const redirectTo = searchParams.get("redirectTo")
    return <Navigate to={redirectTo || "/"} replace />
  }


  return (
    <ThemeProvider theme={theme}>
      <div className={style.jss1}>
        <Container maxWidth="xs" className={style.jss2}>
          <div className={style.jss3}>
            <Avatar className={style.jss4}>
              <PersonIcon fontSize='large' />
            </Avatar>
            <h3>Đăng Nhập</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ textAlign: 'start' }}>
              <div className={style.jss6}>
                <TextField label="Tài Khoản *" className={errors.taiKhoan ? style.jss5Erorr : style.jss5} {...register("taiKhoan")} />
                {errors.taiKhoan && <p style={{ color: '#fb4226' }}>{errors.taiKhoan.message}</p>}
              </div>
              <div>
                <TextField className={errors.matKhau ? style.jss5Erorr : style.jss5} type={showPassword ? 'text' : 'password'}  {...register("matKhau")} InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                  label='Mật Khẩu *'
                />
                {errors.matKhau && <p style={{ color: '#fb4226' }}>{errors.matKhau.message}</p>}

              </div>
              <div className={style.jss7} >
                <Checkbox sx={{ padding: 0, margin: '15px 0' }} />
                <Typography>Nhớ tài khoản</Typography>
              </div>
            </FormControl>
            <Button type='submit' disabled={isLoading} className={style.jss8}>Đăng Nhập</Button>
            {error && <p style={{ color: '#fb4226' }}>{error}</p>}
          </form>

          <div style={{ textAlign: 'end', padding: '10px 0' }}>
            <a onClick={() => { navigate("/sign-up") }} style={{ cursor: 'pointer' }}>
              <h4>Bạn chưa có tài khoản? Đăng ký</h4>
            </a>
          </div>
        </Container>
      </div>
    </ThemeProvider>

  )
}
