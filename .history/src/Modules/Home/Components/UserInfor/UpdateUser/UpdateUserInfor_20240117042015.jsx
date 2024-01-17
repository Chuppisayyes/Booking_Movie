import React from 'react'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import style from "./UpdateUserInforStyle.module.scss";
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserInfor } from '../../../../../Apis/userApi';
import Swal from 'sweetalert2';

import { object, string, ref } from 'yup';

const addUserSchema = object({
  taiKhoan: string()
    .required('Tài khoản không được để trống!')
    .min(6, 'Tài khoản phải có ít nhất 6 ký tự.')
    .max(20, 'Tài khoản không được quá 20 ký tự.'),

  matKhau: string()
    .required('Mật khẩu không được để trống!')
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+[\]{};:'",.<>?/~`-=/\\|]{8,}$/,
      'Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 chữ thường, và 1 số.'
    ),

  confirmPassword: string()
    .required('Xác nhận mật khẩu không được để trống!')
    .oneOf([ref('matKhau'), null], 'Xác nhận mật khẩu phải giống với mật khẩu.'),

  email: string().required('Email không được để trống!').email('Email không hợp lệ.'),

  soDt: string()
    .required('Số điện thoại không được để trống!')
    .matches(/^[0-9]+$/, 'Số điện thoại chỉ được chứa số.')
    .min(10, 'Số điện thoại phải có ít nhất 10 số.')
    .max(15, 'Số điện thoại không được quá 15 số.'),

  hoTen: string().required('Họ tên không được để trống!'),
});


export default function UpdateUserInfor({ accountInfor, handleCloseModal }) {
    const queryClient = useQueryClient()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            "taiKhoan": accountInfor?.taiKhoan,
            "matKhau": accountInfor?.matKhau,
            "email": accountInfor?.email,
            "soDt": accountInfor?.soDt,
            "hoTen": accountInfor?.hoTen,
            "maLoaiNguoiDung": accountInfor?.maLoaiNguoiDung,
            "maNhom": "GP06",
        },
        resolver: yupResolver(addUserSchema),
        mode: 'onTouched'
    });

    const { mutate: onSubmit } = useMutation({
        mutationFn: (values) => {
            return updateUserInfor(values)
        },
        onSuccess: () => {
            handleCloseModal()
            Swal.fire(
                'Thành Công!',
                'Đã cập nhật thông tin người dùng',
                'success'
            )
            queryClient.invalidateQueries({ queryKey: ['getUserInfor'] })
        }
    })

    return (
        <div className={style.jss1}>
            <h3 style={{ textAlign: 'center' }}>CẬP NHẬT THÔNG TIN</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <TextField error={errors.taiKhoan} className={style.jss2} label="Tài Khoản" variant="standard" {...register("taiKhoan")} helperText={errors.taiKhoan?.message} disabled />
                </div>
                <div>
                    <TextField error={errors.matKhau} className={style.jss2} label="Mật Khẩu" variant="standard" {...register("matKhau")} helperText={errors.matKhau?.message} />
                </div>
                <div>
                    <TextField error={errors.email} label="Email" className={style.jss2} variant="standard" {...register("email")} helperText={errors.email?.message} />
                </div>
                <div>
                    <TextField error={errors.hoTen} label="Họ tên" className={style.jss2} variant="standard" {...register("hoTen")} helperText={errors.hoTen?.message} />
                </div>
                <div className="div">
                    <TextField error={errors.soDt} label="Số điện thoại" className={style.jss2} variant="standard" {...register("soDt")} helperText={errors.soDt?.message} />
                </div>
                <div style={{ display: 'flex', margin: '20px 0', justifyContent: 'end' }}>
                    <Button type='submit' className={style.jss3}>CẬP NHẬT</Button>
                </div>
            </form>
        </div>
    )
}