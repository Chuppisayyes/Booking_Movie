import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { object, string } from "yup"
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../../../Apis/userApi.js';
import { useNavigate } from 'react-router-dom';
import style from './SigninStyle.module.css'
import theme from '../../../../Components/ChangeMui/ChangeColor.js'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Avatar, Button, Container, FormControl, IconButton, InputAdornment, TextField, ThemeProvider } from '@mui/material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';


const signupSchema = object({
    taiKhoan: string().required("Tài khoản không được để trống"),
    matKhau: string()
        .required("Mật khẩu không được để trống")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
            "Mật khẩu ít nhất 8 ký tự, 1 kí tự hoa, và 1 số"
        ),
    nhapLaiMatKhau: string()
        .required("Vui lòng nhập lại mật khẩu")
        .test('password match', 'Mật khẩu không trùng khớp', function (value) {
            return this.parent.matKhau === value
        }),
    email: string()
        .required("Email không được để trống")
        .email("Email không đúng định dạng"),
    hoTen: string().required("Họ tên không được để trống")
})

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            taiKhoan: "",
            matKhau: "",
            nhapLaiMatKhau: "",
            email: "",
            hoTen: "",
            maNhom: "GP07"
        },
        resolver: yupResolver(signupSchema),
        mode: 'onTouched'
    });


    const { mutate: handleSignup, error, isLoading } = useMutation({
        mutationFn: (payload) => signup(payload),
        onSuccess: () => { navigate("/log-in") }
    })

    const navigate = useNavigate()

    const onSubmit = (values) => {
        handleSignup(values);
    }


    return (

        <ThemeProvider theme={theme}>
            <div className={style.jss1}>
                <Container maxWidth="xs" className={style.jss2}>
                    <div className={style.jss3}>
                        <Avatar className={style.jss4}>
                            <LockOpenIcon fontSize='medium' />
                        </Avatar>
                        <h3>Đăng Ký</h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl fullWidth sx={{ textAlign: 'start' }}>
                            <div className={style.jss6}>
                                <TextField label="Tài Khoản *" className={errors.taiKhoan ? style.jss5Erorr : style.jss5} {...register("taiKhoan")} />
                                {errors.taiKhoan && <p style={{ color: '#fb4226' }}>{errors.taiKhoan.message}</p>}
                            </div>
                            <div>
                                <TextField className={errors.matKhau ? style.jss5Erorr : style.jss5} type={showPassword ? 'text' : 'password'} label='Mật Khẩu *' {...register("matKhau")} InputProps={{
                                    endAdornment:
                                        (<InputAdornment position="end">
                                            <IconButton
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>)
                                }}
                                />
                                {errors.matKhau && <p style={{ color: '#fb4226' }}>{errors.matKhau.message}</p>}
                            </div>
                            <div>
                                <TextField
                                    {...register("nhapLaiMatKhau")}
                                    className={errors.matKhau ? style.jss5Erorr : style.jss5}
                                    type={showPassword ? 'text' : 'password'}
                                    label='Nhập lại mật Khẩu *'
                                    sx={{ marginTop: '16px' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )

                                    }}
                                />
                                {errors.nhapLaiMatKhau && <p style={{ color: '#fb4226' }}>{errors.nhapLaiMatKhau.message}</p>}
                            </div>
                            <div className={style.jss6}>
                                <TextField label="Họ Tên *" className={errors.hoTen ? style.jss5Erorr : style.jss5} {...register("hoTen")} />
                                {errors.hoTen && <p style={{ color: '#fb4226' }}>{errors.hoTen.message}</p>}
                            </div>
                            <div className={style.jss6}>
                                <TextField label="Email *" className={errors.email ? style.jss5Erorr : style.jss5} {...register("email")} />
                                {errors.email && <p style={{ color: '#fb4226' }}>{errors.email.message}</p>}
                            </div>

                            <Button type='submit' disabled={isLoading} className={style.jss8}>Đăng Ký</Button>
                            {error && <p>{error}</p>}
                        </FormControl>
                    </form>
                    <div style={{ textAlign: 'end', paddingBottom: '10px' }}>
                        <a onClick={() => { navigate("/sign-in") }} style={{ cursor: 'pointer' }}>
                            <h4>Bạn đã có tài khoản? Đăng nhập</h4>
                        </a>
                    </div>
                </Container>
            </div>
        </ThemeProvider>

    )
}

{/* <TextField
    {...register("taiKhoan", {require: {value: true, message: "lỗi'"}})}
    error={!!errors.taiKhoan}
    helperText={errors.taiKhoan.message}
/> */}