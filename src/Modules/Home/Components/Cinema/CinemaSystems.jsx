import { Avatar, Container, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import style from './CinemaSystemsStyle.module.scss'
import { useQuery } from '@tanstack/react-query';
import { getCinemaSystems, getCinemaDetails, getShowtimes } from '../../../../Apis/cinemaAPI';
import dayjs from 'dayjs';
import { CustomTabPanel, a11yProps } from '../../../../CustomTabPanel'
import { useNavigate } from 'react-router-dom';


export default function CinemaSystem() {
  const navigate = useNavigate()
  const [cinemasId, setCinemasId] = useState([]);
  const [cinemaId, setCinemaId] = useState([])

  const { data = [] } = useQuery({ queryKey: ['cinemaSystems'], queryFn: getCinemaSystems });

  const { data: cinemaDetails = [] } = useQuery({
    queryKey: ['cinemaDetails', cinemasId],
    queryFn: () => getCinemaDetails(cinemasId),
    enabled: !!cinemasId
  })

  const { data: showtimesFC } = useQuery({
    queryKey: ['showtimesFC', cinemasId],
    queryFn: () => getShowtimes(cinemasId),
    enabled: !!cinemasId
  })

  const showtimeFC = showtimesFC?.map((cinemas) => {
    return cinemas.lstCumRap.filter((cinema) => {
      return cinema.maCumRap === cinemaId
    })
  }) || []

  useEffect(() => {
    if (data.length > 0) {
      setCinemasId(data[0].maHeThongRap)
    }
  }, [data])

  useEffect(() => {
    if (cinemaDetails.length > 0) {
      setCinemaId(cinemaDetails[0]?.maCumRap)
    }
  }, [cinemaDetails])

  const listMovies = showtimeFC?.map((cinema) => {
    return cinema.map((listMovie) => {
      return listMovie.danhSachPhim.filter((movie) => {
        return movie.dangChieu === true
      })
    })
  })


  const handleSeclectCinemas = (id) => {
    setCinemasId(id)
  }
  const handleSeclectCinema = (id) => {
    setCinemaId(id)
  }

  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [value2, setValue2] = useState(0)
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };

  return (
    <div>
      <Container className={style.jss1} id="1"></Container>
      <Container className={style.jss2} maxWidth="md">
        <Tabs orientation="vertical"
          textColor="inherit"
          className={style.jss3}
          onChange={handleChange}
          value={value}
        >
          {data.map((cinema, index) => {
            return (
              <Tab type='button' {...a11yProps({ index })}
                onClick={() => { handleSeclectCinemas(cinema.maHeThongRap) }}
                label={<Avatar variant='circle' style={{ backgroundColor: "transparent" }}>
                  <img src={cinema.logo} alt="" className={style.jss5} />
                </Avatar>} />
            )
          })}
        </Tabs>
        {data.map((cinema, index) => {
          return (
            <CustomTabPanel index={index} value={value} className={style.jss4}
              onClick={() => { handleSeclectCinemas(cinema.maHeThongRap) }}>
            </CustomTabPanel>
          )
        })}
        <Tabs orientation="vertical" className={style.jss6}
          textColor="inherit"
          onChange={handleChange2}
          value={value2}
        >
          {cinemaDetails.map((cinema) => {
            return (
              <Tab label={<div style={{ width: '100%' }} type='button' className={style.jss7}
                onClick={() => { handleSeclectCinema(cinema.maCumRap) }}>
                <Typography component="h4" className={style.jss8}>
                  {cinema.tenCumRap}
                </Typography>
                <Typography component="h6" className={style.jss9}>
                  {cinema.diaChi}
                </Typography>
                <a className={style.jss10}>[chi tiết]</a>
              </div>} />
            )
          })}
        </Tabs>
        <div className={style.jss11}>
          {listMovies?.map((movies) => {
            return movies.map((movie) => {
              return movie.map((item) => {
                return (
                  <div className={style.jss13}>
                    <div style={{ width: "120px" }}>
                      <img src={item.hinhAnh} alt="" width="100%" height="100px" />
                    </div>
                    <div className={style.jss12}>
                      <Typography component="h2" className={style.jss17}>
                        <span className={style.jss18}>C18</span>
                        {item.tenPhim}
                      </Typography>
                      <div className={style.jss14}>
                        {item.lstLichChieuTheoPhim?.map((showtime) => {
                          return (
                            <a className={style.jss15} onClick={() => navigate(`/purchase/${showtime.maLichChieu}`)}>
                              <Typography className={style.jss16}>{dayjs(showtime.ngayChieuGioChieu).format("DD-MM-YYYY")}</Typography>
                              <Typography> ~ </Typography>
                              <Typography component="h3" sx={{ color: "#fa5238" }}>{dayjs(showtime.ngayChieuGioChieu).format("HH:mm")} </Typography>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              })
            })
          })}
        </div>
      </Container>
    </div>
  )
}
