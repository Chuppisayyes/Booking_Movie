import React from 'react'
import style from './AdminHeaderStyle.module.scss'
import { useUserContext } from '../Context/UserContext';
import { Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';


export default function AdminHeader() {
    const { currentUser, handleSignout } = useUserContext()
    const handleSignoutSwal = () => {
        Swal.fire({
            title: 'Bạn muốn đăng xuất?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: `Hủy`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Đã đăng xuất!', '', 'success')
                handleSignout()
            } else if (result.isDenied) {
                return
            }
        })
    }

    return (
        <div className={style.jss1}>
            <div style={{ display: 'flex' }}>
                <a className={style.jss2} lg="6" item="true">
                    <img src="./image/avt.jpg" className={style.jss3} />
                    <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>{currentUser.hoTen}</Typography>
                </a>
                <a className={style.jss2} lg="6" item="true">
                    <LogoutIcon className={style.jss3} />
                    <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>
                        <a onClick={handleSignoutSwal}>Đăng Xuất</a>
                    </Typography>
                </a>
            </div>

        </div>
    )
}
