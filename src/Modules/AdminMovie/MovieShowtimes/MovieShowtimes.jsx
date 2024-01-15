import React, { useEffect, useState } from 'react'
import style from './MovieShowtimesStyle.module.scss'
import { useParams } from 'react-router-dom'
import { getMovieShowtimes } from "../../../Apis/cinemaAPI"
import { useQuery } from '@tanstack/react-query'
import { Tab, Tabs, Grid, Typography } from '@mui/material'
import dayjs from 'dayjs'
import MovieInfor from './MovieInfor/MovieInfor'

export default function MovieShowtimes() {
    const [cinemas, setCinemas] = useState([])
    const [valueTabs, setValueTabs] = useState(0)
    const { movieId } = useParams();

    const { data: movieShowtimes } = useQuery({
        queryKey: ["getMovieShowtimes", movieId],
        queryFn: () => getMovieShowtimes(movieId),
        enabled: !!movieId
    })

    const cinemaSystem = movieShowtimes?.heThongRapChieu

    const handleChangeValueTabs = (event, newValue) => {
        setValueTabs(newValue)
    }
    const handleGetCinemaSystem = (cinemaSystemId) => {
        const found = cinemaSystem.find((item) => item.maHeThongRap === cinemaSystemId);

        setCinemas(found.cumRapChieu);
    };

    useEffect(() => {
        if (cinemaSystem?.length > 0) {
            setCinemas(cinemaSystem[0].cumRapChieu);
        }

    }, [cinemaSystem])


    if (cinemaSystem?.length === 0) {
        return (
            <div className={style.jss1}>
                <MovieInfor movieShowtimes={movieShowtimes} />
                <div style={{ textAlign: 'center', marginTop: '100px', color: 'grey' }}>
                    <h1>Chưa có lịch chiếu cho phim này</h1>
                </div>
            </div>
        )
    }
    return (
        <div className={style.jss1}>
            <MovieInfor movieShowtimes={movieShowtimes} />
            <div style={{ display: 'flex', marginTop: '30px' }}>

                <Tabs
                    orientation="vertical"
                    value={valueTabs}
                    onChange={handleChangeValueTabs}
                    aria-label="Vertical tabs example"
                    textColor="inherit" >

                    {cinemaSystem?.map((cinema) => {
                        return (
                            <Tab label={<div key={cinema.maHeThongRap}>
                                <img src={cinema.logo} alt="" width={50} height={50}
                                    onClick={() => handleGetCinemaSystem(cinema.maHeThongRap)} />
                            </div>} className={style.jss3} />

                        )
                    })}
                </Tabs>
                <div className={style.jss5}>
                    {cinemas?.map((cinema) => {
                        return (
                            <Grid container style={{ padding: '8px 8px 0 8px' }} >
                                <Grid item xs={12} style={{ padding: '8px 0' }}>
                                    <h3 style={{ color: 'rgb(139, 195, 74)', fontSize: '16px' }}>{cinema.tenCumRap}</h3>
                                </Grid>
                                {cinema.lichChieuPhim.map((showtime) => {
                                    return (
                                        <Grid item xs={3} style={{ padding: '8px 0' }}>
                                            <div className={style.jss6}>
                                                <a className={style.jss7} href={`/purchase/${showtime.maLichChieu}`}>
                                                    <Typography className={style.jss8}>{dayjs(showtime.ngayChieuGioChieu).format(
                                                        "DD-MM-YYYY"
                                                    )}</Typography>
                                                    <Typography className={style.jss9} width='10%'> ~</Typography>
                                                    <Typography className={style.jss10}>{dayjs(showtime.ngayChieuGioChieu).format(
                                                        "HH:mm"
                                                    )}</Typography>
                                                </a>
                                            </div>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}
