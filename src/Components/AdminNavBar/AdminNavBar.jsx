import React, { useState } from 'react'
import style from './AdminNavBarStyle.module.scss'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import DomainIcon from '@mui/icons-material/Domain';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

export default function AdminNavBar() {
    const [showMovieTab, setShowMovieTab] = useState(false)
    const [showUserTab, setShowUserTab] = useState(false)

    const handleShowMovieTab = () => {
        return setShowMovieTab(!showMovieTab);
    }
    const handleShowUserTab = () => {
        return setShowUserTab(!showUserTab)
    }

    const navigate = useNavigate()
    return (
        <div className={style.jss1}>
            <div>
                <div className={style.jss2} style={{ opacity: "0.7", marginBottom: '40px' }}>
                    <AdminPanelSettingsIcon fontSize='large' />
                    <a onClick={() => navigate("/admin")}>
                        <h4>ADMIN MANAGER</h4>
                    </a>
                </div>
                <div className={style.jss2}>
                    <LiveTvIcon />
                    <a onClick={handleShowMovieTab}>Quản lý phim</a>
                    <KeyboardArrowDownIcon />
                </div>
                <div className={style.jss4} hidden={!showMovieTab} id='movie'>
                    <a onClick={() => navigate("/admin/movies")}>Danh sách phim</a>
                </div>

                <div className={style.jss2}>
                    <PersonOutlineIcon />
                    <a onClick={handleShowUserTab}>Quản lý người dùng</a>
                    <KeyboardArrowDownIcon />
                </div>
                <div className={style.jss4} hidden={!showUserTab} id='user'>
                    <a onClick={() => navigate("/admin/users")}>Danh sách người dùng</a>
                </div>
                <div className={style.jss2}>
                    <MovieIcon />
                    <a>Quản lý phòng vé</a>
                    <KeyboardArrowDownIcon />
                </div>
                <div className={style.jss2}>
                    <DomainIcon />
                    <a>Quản lý Rạp</a>
                    <KeyboardArrowDownIcon />
                </div>
            </div >
        </div>
    )
}
