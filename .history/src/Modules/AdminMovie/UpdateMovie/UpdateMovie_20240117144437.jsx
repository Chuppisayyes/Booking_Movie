import { useMutation } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateMovie } from '../../../Apis/movieApi'
import dayjs from 'dayjs'
import style from '../AddMovie/AddMovieStyle.module.scss'
import { TextField } from '@mui/material'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Swal from 'sweetalert2';
import { getMovieList } from '../../../redux/movieListSlice'
import { useDispatch } from 'react-redux'

const UpdateMovieSchema = object({
    tenPhim: string().required("Tên phim không được để trống"),
    biDanh: string().required("Bí danh không được để trống"),
    moTa: string().required("Mô tả không được để trống"),
    danhGia: string().required("Đánh giá không được để trống"),
    trailer: string().required("Trailer không được để trống"),
    ngayKhoiChieu: string().required("Ngày khởi chiếu không được để trống"),
})

export default function UpdateMovie({ handleCloseModalUpdateMovie, movieUpdate }) {
    const dispatch = useDispatch()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            maPhim: movieUpdate.maPhim,
            tenPhim: movieUpdate.tenPhim,
            biDanh: movieUpdate.biDanh,
            moTa: movieUpdate.moTa,
            danhGia: movieUpdate.danhGia,
            hinhAnh: "",
            trailer: movieUpdate.trailer,
            ngayKhoiChieu: ""
        },
        resolver: yupResolver(UpdateMovieSchema),
        mode: "onTouched",
    })
    const hinhAnh = watch("hinhAnh");
    const [imgPreview, setImgPreView] = useState("")
    useEffect(() => {
        const file = hinhAnh?.[0];
        if (!file) return

        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = (evt) => {
            setImgPreView(evt.target.result);
        }

    }, [hinhAnh])

    const { mutate: onSubmit } = useMutation({
        mutationFn: (values) => {
            const formData = new FormData();
            formData.append("maPhim", values.maPhim)
            formData.append("tenPhim", values.tenPhim)
            formData.append("biDanh", values.biDanh)
            formData.append("moTa", values.moTa)
            formData.append("danhGia", values.danhGia)
            formData.append("hinhAnh", hinhAnh[0])
            formData.append("trailer", values.trailer)
            formData.append("ngayKhoiChieu", values.ngayKhoiChieu)
            formData.append("maNhom", "GP09");

            return updateMovie(formData)
        },
        onSuccess: () => {
            Swal.fire(
                'Thành Công!',
                'Đã thêm phim mới',
                'success'
            )
            handleCloseModalUpdateMovie();
            dispatch(getMovieList({}))
        }
    })

    return (
        <div className={style.jss1}>
            <h2 className={style.jss2}>CẬP NHẬT PHIM</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.jss3} style={{ display: 'flex' }}>

                    <TextField error={errors.maPhim} className={style.jss7} label="Mã Phim" variant="standard" {...register("maPhim")} helperText={errors.maPhim?.message} disabled />

                    <TextField error={errors.tenPhim} className={style.jss4} label="Tên Phim" variant="standard" {...register("tenPhim")} helperText={errors.tenPhim?.message} />

                    <TextField error={errors.biDanh} className={style.jss4} label="Bí Danh" variant="standard" {...register("biDanh")} helperText={errors.biDanh?.message} />

                </div>
                <div>
                    <TextField error={errors.moTa} className={style.jss4} label="Mô Tả" variant="standard" {...register("moTa")} helperText={errors.moTa?.message} />
                </div>
                <div style={{ display: 'flex' }}>
                    <TextField
                        InputLabelProps={{
                            shrink: true,
                        }} className={style.jss4} label="Hình Ảnh" variant="standard" type='file' {...register("hinhAnh")}
                    />
                    <div>
                        <img src={imgPreview ? imgPreview : movieUpdate.hinhAnh} alt="preview" width={200} height={200} />
                    </div>
                </div>
                <div>
                    <TextField error={errors.trailer} className={style.jss4} label="Trailer" variant="standard" {...register("trailer")}
                        helperText={errors.trailer?.message}
                    />
                </div>
                <div className={style.jss3} style={{ display: 'flex' }}>
                    <TextField
                        defaultValue={movieUpdate.ngayKhoiChieu}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        className={style.jss4} label="Ngày Khởi Chiếu" variant="standard" type='datetime-local' {...register("ngayKhoiChieu", {
                            setValueAs: (value) => {
                                return dayjs(value).format("DD/MM/YYYY HH:mm:SS")
                            }
                        })}
                    />
                    <TextField error={errors.danhGia} className={style.jss4} label="Đánh Giá" variant="standard" {...register("danhGia")} helperText={errors.danhGia?.message} />
                </div>
                <div style={{ textAlign: 'right', margin: '10px 0' }}>
                    <button type='submit' className={style.jss5}>Cập Nhật Phim</button>
                    <button className={style.jss6} onClick={handleCloseModalUpdateMovie}>Hủy</button>
                </div>
            </form>
        </div>
    )
}

