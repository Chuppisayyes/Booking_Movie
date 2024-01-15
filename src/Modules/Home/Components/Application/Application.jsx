import React, { useRef } from 'react'
import style from './ApplicationStyle.module.scss'
import { Container, Grid } from '@mui/material'
import Slider from 'react-slick';

export default function Application() {
    const slider = useRef();
    const settings = {
        dotsClass: `${style.dotsBanner}`,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
    }

    return (
        <div>
            <div style={{ paddingTop: '55px' }} id={3}></div>
            <div className={style.jss1} >
                <Container maxWidth="md">
                    <Grid container spacing={{ xs: 4 }} className={style.jss9}>
                        <Grid item xs={12} md={6} style={{ color: "#fff" }}>
                            <p className={style.jss2}>Ứng dụng tiện lợi dành cho</p>
                            <p className={style.jss2}>người yêu điện ảnh</p>
                            <p className={style.jss3}>Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.</p>
                            <a href='https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197' target='_blank' type='button' className={style.jss4}>APP MIỄN PHÍ - TẢI VỀ NGAY</a>
                            <p className={style.jss3}>TIX có hai phiên bảnIOS&Android</p>
                        </Grid>
                        <Grid item xs={12} md={6} style={{ position: 'relative' }} className={style.jss8}>
                            <img src="./image/phone.png" alt="" className={style.jss5} height='auto' />
                            <div className={style.jss6}>
                                <Slider {...settings}>
                                    <div >
                                        <img src="./image/banner-slider-1.jpg" alt="" className={style.jss7} />
                                    </div>
                                    <div >
                                        <img src="./image/banner-slider-2.jpg" alt="" className={style.jss7} />
                                    </div>
                                    <div >
                                        <img src="./image/banner-slider-3.jpg" alt="" className={style.jss7} />
                                    </div>
                                    <div >
                                        <img src="./image/banner-slider-4.jpg" alt="" className={style.jss7} />
                                    </div>
                                    <div >
                                        <img src="./image/banner-slider-5.jpg" alt="" className={style.jss7} />
                                    </div>
                                </Slider>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}
