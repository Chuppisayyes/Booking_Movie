import React, { useEffect, useState } from 'react'
import AddMovie from './AddMovie/AddMovie'
import UpdateMovie from './UpdateMovie/UpdateMovie'
import style from './AdminMovieStyle.module.scss'
import { Button, Modal } from '@mui/material'
import { list } from './TableList'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getMovieList } from "../../redux/movieListSlice"
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteMovie, getMoviesSearch } from "../../Apis/movieApi"

import Swal from 'sweetalert2'

export default function AdminMovie() {
    const [movieUpdate, setMovieUpdate] = useState("")
    const [searchTerm, setSearchTerm] = useState("")
    const [openModalAddMovie, setopenModalAddMovie] = useState(false)
    const [openModalUpdateMovie, setopenModalUpdateMovie] = useState(false)

    const [searchParams, setSearchParams] = useSearchParams()

    const dispatch = useDispatch()
    const { data } = useSelector((state) => {
        return state.movieList;
    })

    const totalPages = data.totalPages;
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
    let movies = data.items;

    const handleOpenModalAddMovie = () => {
        setopenModalAddMovie(true)
    }
    const handleCloseModalAddMovie = () => {
        setopenModalAddMovie(false)
    }
    const handleOpenModalUpdateMovie = (movie) => {
        setopenModalUpdateMovie(true)
        setMovieUpdate(movie)
    }
    const handleCloseModalUpdateMovie = () => {
        setopenModalUpdateMovie(false)
    }

    const handleChangePage = (page) => {
        searchParams.set("soTrang", page)
        setSearchParams(searchParams)
    }


    useEffect(() => {
        dispatch(getMovieList({}))
        const page = searchParams.get("soTrang");
        dispatch(getMovieList({ page }))


    }, [searchParams])


    //setup button active
    const button = document.getElementById('button')
    let prevButton = null
    button?.addEventListener('click', (e) => {
        const isButton = e.target.nodeName === 'BUTTON';
        if (!isButton) {
            return;
        }

        if (prevButton !== null) {
            prevButton.style.background = "rgba(250, 71, 6, 0.813)"
        }
        e.target.style.background = "red";
        prevButton = e.target;
    })

    const handleDeleteMovieSwal = (movieId) => {
        Swal.fire({
            title: 'Bạn muốn xóa phim?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Đồng ý',
            cancelButtonText: `Hủy`,
        }).then((result) => {
            if (result.isConfirmed) {
                handleDeleteMovie(movieId)
            } else if (result.isDenied) {
                return
            }
        })
    }
    const { mutate: handleDeleteMovie } = useMutation({
        mutationFn: (movieId) => deleteMovie(movieId),
        onSuccess: () => {
            Swal.fire(
                'Thành Công!',
                'Đã xóa phim',
                'success'
            )
            dispatch(getMovieList({}));
            navigate("/manage-admin/movies?soTrang=1");
            button.style.backgroundColor = "rgba(250, 71, 6, 0.813)"
        }
    })

    const navigate = useNavigate()
    const handleShowShowtimes = (movieId) => {
        navigate(`/admin/showtimes/${movieId}`)
    }

    const handleSearch = (evt) => {
        if (evt.key === "Enter") {
            setSearchTerm(evt.target.value)
        }
    }

    const { data: moviesSearch } = useQuery({
        queryKey: ['getMoviesSearch', searchTerm, searchParams.get('soTrang')],
        queryFn: () => getMoviesSearch(searchTerm, searchParams.get('soTrang')),
        enabled: !!searchTerm
    })

    const totalPagesSearch = moviesSearch?.totalPages;
    const pagesSearch = Array.from({ length: totalPagesSearch }, (_, index) => index + 1)

    console.log(movieUpdate);

    return (
        <div className={style.jss1}>
            <div style={{ paddingLeft: '10px' }}>
                <div className={style.jss11}>
                    <input className={style.jss12} onKeyDown={handleSearch} type="text" placeholder='Tìm kiếm phim...' />
                </div>
                <div>
                    <button className={style.jss13}
                        onClick={handleOpenModalAddMovie}
                    >Thêm Phim</button>
                </div>
                <Modal
                    open={openModalAddMovie}
                    onClose={handleCloseModalAddMovie}>
                    <AddMovie handleCloseModalAddMovie={handleCloseModalAddMovie} />
                </Modal>
                <div>
                    <table className={style.jss3}>
                        <thead >
                            <tr>
                                {list.map((item, index) => {
                                    return <td key={index} className={style.jss2} style={{ maxWidth: `${item.width}` }}>{item.text}</td>
                                })}
                            </tr>
                        </thead>
                        {moviesSearch ?
                            moviesSearch?.items.map((movie, index) => {
                                return (
                                    <tbody>
                                        <tr key={index}>
                                            <td>{movie.maPhim}</td>
                                            <td>{movie.tenPhim}</td>
                                            <td style={{ overflowWrap: 'anywhere' }}>{movie.trailer}</td>
                                            <td>{movie.biDanh}</td>
                                            <td><img src={movie.hinhAnh} style={{ width: '100px', height: '100px' }} alt="" /></td>
                                            <td style={{ overflowWrap: 'inherit' }}>{movie.moTa}</td>
                                            <td>
                                                <button className={style.jss5}
                                                    onClick={() => handleOpenModalUpdateMovie(movie)}>Sửa</button>
                                                <Modal
                                                    open={openModalUpdateMovie}
                                                    onClose={handleCloseModalUpdateMovie}>
                                                    <UpdateMovie
                                                        movieUpdate={movieUpdate}
                                                        handleCloseModalUpdateMovie={handleCloseModalUpdateMovie} />
                                                </Modal>
                                                <button onClick={() => handleDeleteMovieSwal(movie.maPhim)} className={style.jss6}>Xóa</button>
                                                <button onClick={() => handleShowShowtimes(movie.maPhim)} className={style.jss7}>Lịch Chiếu</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            }) :
                            movies?.map((movie, index) => {
                                return (
                                    <tbody>
                                        <tr key={index}>
                                            <td>{movie.maPhim}</td>
                                            <td>{movie.tenPhim}</td>
                                            <td style={{ overflowWrap: 'anywhere' }}>{movie.trailer}</td>
                                            <td>{movie.biDanh}</td>
                                            <td><img src={movie.hinhAnh} style={{ width: '100px', height: '100px' }} alt="" /></td>
                                            <td style={{ overflowWrap: 'inherit' }}>{movie.moTa}</td>
                                            <td>
                                                <button className={style.jss5}
                                                    onClick={() => handleOpenModalUpdateMovie(movie)}>Sửa</button>
                                                <Modal
                                                    open={openModalUpdateMovie}
                                                    onClose={handleCloseModalUpdateMovie}>
                                                    <UpdateMovie
                                                        movieUpdate={movieUpdate}
                                                        handleCloseModalUpdateMovie={handleCloseModalUpdateMovie} />
                                                </Modal>
                                                <button onClick={() => handleDeleteMovieSwal(movie.maPhim)} className={style.jss6}>Xóa</button>
                                                <button onClick={() => handleShowShowtimes(movie.maPhim)} className={style.jss7}>Lịch Chiếu</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                    <div id='button' className={style.jss8}>
                        {moviesSearch ?
                            pagesSearch.map((page, index) => {
                                return <Button id={index} className={style.jss9} onClick={() => handleChangePage(page)}>{page}</Button>
                            })
                            : pages.map((page, index) => {
                                return <Button id={index} className={style.jss9} onClick={() => handleChangePage(page)}>{page}</Button>
                            })}</div>
                </div>
            </div>
        </div>
    )
}
