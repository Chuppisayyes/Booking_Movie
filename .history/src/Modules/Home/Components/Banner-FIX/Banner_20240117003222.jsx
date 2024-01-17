import { useQuery } from '@tanstack/react-query'
import { getBanners, getMovies } from '../../../../Apis/movieApi'
import { getMovieShowtimes } from '../../../../Apis/cinemaAPI';
import React, { useRef, useState } from 'react'
import Slider from 'react-slick';
import style from './BannerStyle.module.scss'
import { Button, ButtonBase, Container, FormControl, Grid, Modal, NativeSelect } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import ReactPlayer from 'react-player';


export default function Banner() {
  const [movieId, setMovieId] = useState(null);
  const [cinemaId, setCinemaId] = useState(null);
  const [showtimeId, setShowtimeId] = useState("");

  const navigate = useNavigate()
  //api lấy danh sách banner
  const {
    data: banners = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ['banners'], queryFn: getBanners });

  //api lấy danh sách phim
  const { data: movies = [] } = useQuery({ queryKey: ['movie'], queryFn: getMovies })

  //api lấy thông tin phim
  const { data: movieShowTimes = [] } = useQuery({ queryKey: ['getMovieShowtimes', movieId], queryFn: () => getMovieShowtimes(movieId), enabled: !!movieId })


  const cinemaSystems = movieShowTimes?.heThongRapChieu || [];

  const cinemas = cinemaSystems?.map((cinemas) => {
    return cinemas.cumRapChieu.filter((cinema) => {
      return cinema.maCumRap === cinemaId
    })
  }
  )

  const handleChangeMovie = (evt) => {
    setMovieId(evt.target.value)
  }
  const handleChangeCinema = (evt) => {
    setCinemaId(evt.target.value)
  }

  const handleChangeShowtimes = (evt) => {
    setShowtimeId(evt.target.value)
  }

  //setup slider
  const slider = useRef();

  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  //-------

  const handleBuyTicket = () => {
    if (!movieId) {
      Swal.fire(
        'Bạn chưa chọn phim',
        'Vui lòng chọn phim!',
      )
      return
    } else if (!cinemaId) {
      Swal.fire(
        'Bạn chưa chọn rạp',
        'Vui lòng chọn rạp!',
      )
      return
    }
    else if (!showtimeId) {
      Swal.fire(
        'Bạn chưa chọn ngày giờ chiếu',
        'Vui lòng chọn ngày giờ chiếu!',
      )
      return
    }
    navigate(`/purchase/${showtimeId}`)
  }

  const settings = {
    dots: true,
    dotsClass: `${style.dotsBanner}`,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

  }

  //setup modal video banner
  const [trailerMovie, setTrailerMovie] = useState("")
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = (idBanner) => {
    if (idBanner === 1) {
      setTrailerMovie("https://www.youtube.com/watch?v=uqJ9u7GSaYM");
    }
    if (idBanner === 2) {
      setTrailerMovie("https://www.youtube.com/watch?v=QnrHVynRwTM");
    }
    if (idBanner === 3) {
      setTrailerMovie("https://www.youtube.com/watch?v=3JPgwgMoMZE")
    }
    return setOpenModal(true)
  }

  const styleModalVideo = {
    border: 'none',
    backgroundColor: 'tranferant',
    width: '640px',
    height: 'auto',
    top: '15%',
    left: '30%',
  };

  const handleCloseModal = () => {
    return setOpenModal(false)
  }


  return (
    <Container className={style.jss1} id="1"></Container>
    <Container className={style.jss4} sx={{ display: { xs: 'none', sm: 'block' } }} >
      <Slider ref={(c) => (slider.current = c)} {...settings} >

        {banners.map((banner) => {
          return (
            <div>
              <div className={style.jss0}>
                <img key={banner.maBanner} src={banner.hinhAnh} className={style.jss7} />
                <div className={style.jss13} style={{ textAlign: 'center' }}>
                  <Button className={style.jss14}
                    onClick={() => { handleOpen(banner.maBanner) }}>
                    <span>
                      <img src="./image/buttonvideo.png" alt="" className={style.jss15} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>)
        })}
      </Slider>
      <Modal sx={styleModalVideo} open={openModal} onClose={handleCloseModal}>
        <div>
          <ReactPlayer url={`${trailerMovie}`} playing width="640px" />
        </div>
      </Modal>
      <div className={style.jss8}>
        <ButtonBase className={style.jss9} onClick={previous}>
          <span className={style.jss10}>
            <ArrowBackIosIcon className={style.jss11} />
          </span>
        </ButtonBase>
      </div>
      <div className={style.jss12}>
        <ButtonBase className={style.jss9} onClick={next}>
          <span className={style.jss10}>
            <ArrowForwardIosIcon className={style.jss11} />
          </span>
        </ButtonBase>
      </div>
      <Container className={style.jss2} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Grid container className={style.jss3}>
          <Grid item xs={4}>
            <div style={{ height: '100%' }}>
              <FormControl className={style.jss5}>
                <NativeSelect defaultValue={'phim'}
                  className={style.jss1}
                  onChange={handleChangeMovie}>
                  <option value={null}>Phim</option>
                  {movies?.map((movie) => (
                    <option value={movie.maPhim}>{movie.tenPhim}</option>
                  ))}
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{ height: '100%' }}>
              <FormControl className={style.jss5}>
                <NativeSelect defaultValue='rap'
                  className={style.jss1}
                  onChange={handleChangeCinema}>
                  <option value={""}>Rạp</option>
                  {cinemaSystems?.map((cinemaSystem) => {
                    const cinemas = cinemaSystem.cumRapChieu;
                    return cinemas?.map((cinema) => {
                      return <option value={cinema.maCumRap}>{cinema.tenCumRap}</option>
                    })
                  })}
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div style={{ height: '100%' }}>
              <FormControl className={style.jss5}>
                <NativeSelect defaultValue='time' className={style.jss1}
                  onChange={handleChangeShowtimes}>
                  <option>Ngày giờ chiếu</option>
                  {cinemas.map((cinema) => {
                    return cinema.map((showtime) => {
                      return showtime.lichChieuPhim.map((time) => {
                        return <option value={time.maLichChieu}>{time.ngayChieuGioChieu}</option>
                      })
                    })
                  })}
                </NativeSelect>
              </FormControl>
            </div>
          </Grid>
          <Grid item xs={2}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <FormControl>
                <Button variant='contained' sx={{ backgroundColor: '#fb4226', padding: '10px 20px' }} className={style.jss6} onClick={handleBuyTicket}>MUA VÉ NGAY</Button>
              </FormControl>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}
