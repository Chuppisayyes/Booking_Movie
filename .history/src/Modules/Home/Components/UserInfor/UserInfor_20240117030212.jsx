import React, { useState } from 'react';
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
  const { currentUser } = useUserContext();
  const account = currentUser?.taiKhoan;
  const { data } = useQuery({
    queryKey: ['getUserInfor', account],
    queryFn: () => getUserInfor(account),
    enabled: !!account,
  });
  const accountInfor = data?.items[0];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className={style.userInforContainer}>
      <Grid container>
        <Grid item xs={4} className={style.userInfoContainer}>
          <div className={style.userInfoHeader}>
            <h2>Thông Tin Tài Khoản</h2>
            <a onClick={handleOpenModal} style={{ cursor: 'pointer' }}>
              <EditIcon />
            </a>
          </div>
          <div className={style.userInfoDetails}>
            <div className={style.userInfoItem}>
              <h4>Tài Khoản :</h4>
              <p>{accountInfor?.taiKhoan}</p>
            </div>
            <div className={style.userInfoItem}>
              <h4>Mật Khẩu :</h4>
              <p>********</p>
            </div>
            <div className={style.userInfoItem}>
              <h4>Họ Tên :</h4>
              <p>{accountInfor?.hoTen}</p>
            </div>
            <div className={style.userInfoItem}>
              <h4>Email :</h4>
              <p>{accountInfor?.email}</p>
            </div>
            <div className={style.userInfoItem}>
              <h4>Số Điện Thoại :</h4>
              <p>{accountInfor?.soDt}</p>
            </div>
          </div>
        </Grid>
        <Modal sx={styleModal} open={openModal} onClose={handleCloseModal}>
          <UpdateUserInfor accountInfor={accountInfor} handleCloseModal={handleCloseModal} />
        </Modal>
        <Grid item xs={8} className={style.bookingHistoryContainer}>
          <div className={style.bookingHistoryHeader}>
            <h2>Lịch Sử Đặt Vé</h2>
          </div>
          {/* Add your booking history content here */}
        </Grid>
      </Grid>
    </div>
  );
}
