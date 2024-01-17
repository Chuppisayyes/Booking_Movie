import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Divider, Drawer, Grid, List, ListItem, Toolbar, Typography } from '@mui/material';
import style from "./HeaderStyle.module.scss";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useUserContext } from '../Context/UserContext';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';



export default function Header() {
console.log(currentUser);
// Kiểm tra xem currentUser có tồn tại không
if (currentUser) {
  const maLoaiNguoiDung = currentUser.maLoaiNguoiDung;
  // Kiểm tra giá trị của maLoaiNguoiDung
  if (maLoaiNguoiDung === 'QuanTri') {
    // Nếu là Quản trị, thực hiện các hành động tương ứng
    console.log('Người dùng là Quản trị');
    // Thêm các hành động khác tại đây nếu cần
  } else if (maLoaiNguoiDung === 'KhachHang') {
    // Nếu là Khách hàng, thực hiện các hành động tương ứng
    console.log('Người dùng là Khách hàng');
    // Thêm các hành động khác tại đây nếu cần
  } else {
    // Trường hợp khác, có thể xử lý hoặc báo lỗi tùy thuộc vào logic ứng dụng
    console.log('Người dùng có maLoaiNguoiDung không xác định');
  }
} else {
  // Trường hợp currentUser không tồn tại (người dùng chưa đăng nhập)
  console.log('Người dùng chưa đăng nhập');
}

// ...

  const navigate = useNavigate()
  const { currentUser, handleSignout } = useUserContext();

  const pages = ["Lịch Chiếu", "Cụm Rạp", "Tin Tức", "Ứng Dụng"];
  const [isOpenDrawer, setisOpenDrawer] = useState(false)
  const handleDrawerToggle = () => {
    setisOpenDrawer(!isOpenDrawer);
  }
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (!element) {
      return
    }
    element.scrollIntoView({ behavior: "smooth" })
  }

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
        navigate("/")
      } else if (result.isDenied) {
        return
      }
    })
  }
  console.log(currentUser);

  return (
    <div>
      <AppBar position='fixed' color='transparent'>
        <Toolbar className={style.jss1}>
          <Grid container alignItems="center">
            <Grid item xs={6} lg={3}>
              <a onClick={() => { navigate("/") }}>
                <img src="https://demo1.cybersoft.edu.vn/logo.png" alt="" className={style.jss2} />
              </a>
            </Grid>
            <Grid container item justifyContent="center" alignItems="center" sx={{ display: { xs: 'none', lg: 'flex' } }} lg={5}>
              {pages.map((page, index) => {
                return (
                  <a className={style.jss3} onClick={() => handleScroll(index)}>
                    <Typography
                      variant="h4"
                      sx={{ fontSize: 14, fontWeight: 500 }}
                    > {page}
                    </Typography>
                  </a>
                )
              })}
            </Grid>

            <Grid item container justifyContent="flex-end" sx={{ display: { xs: 'none', lg: 'flex' } }} lg={4} >
              {currentUser ?
                <a className={style.jss4} lg="6" item="true" onClick={() => navigate("/account")}>
                  <img src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/404931285_3568833133329150_7685244699268670578_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFWqGgOizBCrBmF1XQWrkhNb3ARluray7RvcBGW6trLtOH0lpff907-sjIbSnZuzzOU2LN9UlWFyAV4UT6XYPbj&_nc_ohc=YVdmilhJeFAAX8Rgyxw&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBsqT4Btft40gdIHuIUAo0aMG4HzFQxvDsvGzOAm1WBbQ&oe=65AA916B" className={style.jss5} />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 16, fontWeight: 500 }}>{currentUser.hoTen}</Typography>
                </a>
                :
                <a className={style.jss4} lg="6" item="true"
                  onClick={() => navigate("/log-in")}>
                  <AccountCircleIcon className={style.jss5} />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 16, fontWeight: 500 }}>Đăng Nhập</Typography>
                </a>
              }
              <Divider orientation='vertical' flexItem />
              {currentUser ?
                <a className={style.jss4} lg="6" item="true">
                  <LogoutIcon className={style.jss5} />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 16, fontWeight: 500 }}>
                    <a onClick={handleSignoutSwal}>Đăng Xuất</a>
                  </Typography>
                </a> :
                <a className={style.jss4} lg="6" item="true"
                  onClick={() => { navigate("/sign-up") }}>
                  <AccountCircleIcon className={style.jss5} />
                  <Typography
                    variant="h3"
                    sx={{ fontSize: 16, fontWeight: 500 }}>
                    Đăng Ký
                  </Typography>
                </a>}
            </Grid>

            <Grid item container justifyContent={{ xs: "flex-end" }} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={6}>
              <MenuIcon fontSize="large"
                sx={{ color: '#fb4226' }}
                className={style.jss6}
                onClick={handleDrawerToggle} />
            </Grid>

            <Drawer
              variant='temporary'
              open={isOpenDrawer}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true
              }}
              sx={{
                display: { xs: 'block', lg: 'none' },
                '& .MuiDrawer-paper': {
                  width: 200,
                  boxSizing: 'border-box',
                },
              }}>

              <List>
                <ListItem sx={{ paddingTop: '15px' }}>
                  {currentUser ?
                    <a className={style.jss4} lg="6" item="true" onClick={() => navigate("/account")}>
                      <img src="https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-1/404931285_3568833133329150_7685244699268670578_n.jpg?stp=cp6_dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFWqGgOizBCrBmF1XQWrkhNb3ARluray7RvcBGW6trLtOH0lpff907-sjIbSnZuzzOU2LN9UlWFyAV4UT6XYPbj&_nc_ohc=YVdmilhJeFAAX8Rgyxw&_nc_ht=scontent-hkg1-2.xx&oh=00_AfBsqT4Btft40gdIHuIUAo0aMG4HzFQxvDsvGzOAm1WBbQ&oe=65AA916B" className={style.jss5} />
                      <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>{currentUser.hoTen}</Typography>
                    </a>
                    :
                    <a className={style.jss4} lg="6" item="true"
                      onClick={() => navigate("/log-in")}>
                      <AccountCircleIcon className={style.jss5} />
                      <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>Đăng Nhập</Typography>
                    </a>
                  }
                </ListItem>
                <ListItem sx={{ paddingTop: '15px' }}>
                  {currentUser ?
                    <a className={style.jss4} lg="6" item="true">
                      <LogoutIcon className={style.jss5} />
                      <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>
                        <a onClick={handleSignoutSwal}>Đăng Xuất</a>
                      </Typography>
                    </a> :
                    <a className={style.jss4} lg="6" item="true"
                      onClick={() => { navigate("/sign-up") }}>
                      <AccountCircleIcon className={style.jss5} />
                      <Typography
                        variant="h3"
                        sx={{ fontSize: 16, fontWeight: 500 }}>
                        Đăng Ký
                      </Typography>
                    </a>}
                </ListItem>

              </List>

              <Divider />

              <List sx={{ flexGrow: 1 }}>
                {pages.map((page) => (
                  <ListItem sx={{ paddingTop: '22px' }}>
                    <a className={style.jss3}><Typography
                      variant="h4"
                      sx={{ fontSize: 14, fontWeight: 500 }}
                    > {page}
                    </Typography></a>
                  </ListItem>
                )
                )}
              </List>
            </Drawer>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar variant='regular' sx={{ position: "relative" }}></Toolbar>
    </div>

  )
}