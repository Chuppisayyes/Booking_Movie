import React from 'react'
import style from '../MovieShowtimesStyle.module.scss'
import dayjs from 'dayjs'

export default function MovieInfor({ movieShowtimes }) {
    return (
        <div className={style.jss2}>
            <img src={movieShowtimes?.hinhAnh}
                width="150px" height="auto" />
            <div className={style.jss3}>
                <h3 className={style.jss4}>{movieShowtimes?.tenPhim}</h3>
                <p>Ngày khởi chiếu : {dayjs(movieShowtimes?.ngayChieuGioChieu).format(
                    "DD-MM-YYYY"
                )}</p>
            </div>
        </div>
    )
}
