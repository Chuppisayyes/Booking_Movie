import React, { useState } from 'react'
import style from './UserInforStyle.module.scss';
import { Grid, Modal } from '@mui/material';
import { useUserContext } from '../../../../Components/Context/UserContext';
import EditIcon from '@mui/icons-material/Edit';
import UpdateUserInfor from './UpdateUser/UpdateUserInfor';
import { getUserInfor } from '../../../../Apis/userApi';
import { useQuery } from '@tanstack/react-query';

const styleModal = {
    border: 'none',
    backgroundColor: 'tranferant',
    width: '450px',
    height: 'auto',
    top: '5%',
    left: '35%',
};

export default function UserInfor() {
    const { currentUser } = useUserContext()
    const account = currentUser?.taiKhoan;
    const { data, isLoading, isError } = useQuery({
        queryKey: ['getUserInfor', account],
        queryFn: () => getUserInfor(account),
        enabled: !!account,
    });
    const accountInfor = data;

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => {
        return setOpenModal(true)
    }
    const handleCloseModal = () => {
        return setOpenModal(false)
    }

    return (
        <div className={style.jss1}>
            <Grid container >
                <Grid item xs={4} className={style.jss2}>
                    <div className={style.jss6} style={{ display: 'flex' }}>
                        <h2 style={{ marginRight: '20px' }}>Thông Tin Tài Khoản</h2>
                        <a onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
                            <EditIcon />
                        </a>
                    </div>
                    <div className={style.jss3}>
                        <div className={style.jss4}>
                            <h4>Tài Khoản :</h4>
                            <p style={{ marginLeft: '10px', fontWeight: "600", fontSize: "20px", color: "green" }}>{accountInfor?.taiKhoan}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h4>Mật Khẩu :</h4>
                            <p style={{ marginLeft: '10px', fontWeight: "600", fontSize: "20px", color: "green" }}>{accountInfor?.matKhau}</p>
                        </div>
                        <div className={style.jss4}>
                            <h4>Họ Tên :</h4>
                            <p style={{ marginLeft: '10px', fontWeight: "600", fontSize: "20px", color: "green" }}>{accountInfor?.hoTen}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <h4>Email :</h4>
                            <p style={{ marginLeft: '10px', fontWeight: "600", fontSize: "20px", color: "green" }}> {accountInfor?.email}</p>

                        </div>
                        <div className={style.jss4} style={{ display: 'flex' }}>
                            <h4>Số Điện Thoại :</h4>
                            <p style={{ marginLeft: '10px', fontWeight: "600", fontSize: "20px", color: "green" }}> {accountInfor?.soDt}</p>

                        </div>
                    </div>
                </Grid>
                <Modal sx={styleModal} open={openModal} onClose={handleCloseModal}>
                    <UpdateUserInfor accountInfor={accountInfor} handleCloseModal={handleCloseModal} />
                </Modal>
                <Grid item xs={8} className={style.jss5}>
                    <div className={style.jss6}>
                        <h2>Lịch Sử Đặt Vé</h2>
                        {isLoading && <p>Loading lịch sử đặt vé...</p>}
                        {isError && <p>Lỗi khi tải lịch sử đặt vé</p>}
                        {accountInfor?.thongTinDatVe?.map((ve, index) => (
                            <div key={index} className={style.historyItem}>
                                <h3>{ve.tenPhim}</h3>
                                <p><strong>Ngày Đặt:</strong> {new Date(ve.ngayDat).toLocaleString()}</p>
                                <p><strong>Mã Vé:</strong> {ve.maVe}</p>
                                <p><strong>Danh sách ghế:</strong> {ve.danhSachGhe.map(ghe => ghe.tenGhe).join(', ')}</p>
                            </div>
                        ))}
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}
