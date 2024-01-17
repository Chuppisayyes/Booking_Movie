import baseAPI from "./baseApi";

export async function getBanners() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}

export async function getListOfFilms() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: "GP09",
      },
    });
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}
export async function getListOfFilmsByPages() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}
export async function getListOfFilmsByDays() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimTheoNgay");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}
export async function getMovies() {
    try {
        const response = await baseAPI.get("/QuanLyPhim/LayDanhSachPhim", {
            params: {
                maNhom: "GP0",
            }
        })
        return response.data.content
    } catch (error) {
        throw error.response.data.content;
    };
}
export async function getMovieDetails(movieId) {
    try {
      const resp = await baseAPI.get("quanlyrap/laythongtinlichchieuphim", {
        params: {
          maPhim: movieId,
        },
      });
      return resp.data.content;
    } catch (error) {
      throw error.response?.data?.content;
    }
  }

export async function addMovie(movie) {
    try {
        const response = await baseAPI.post("/QuanLyPhim/ThemPhimUploadHinh", movie)
        return response.data?.content
    } catch (error) {
        alert(error.response.data?.content)
        throw error.response.data?.content
    }
}
export async function deleteMovie(movieId) {
    try {
        const response = await baseAPI.delete("/QuanLyPhim/XoaPhim", {
            params: {
                MaPhim: movieId,
            }
        })
        return response.data?.content
    } catch (error) {
        throw error.response.data.content
    }
}

export async function updateMovie(values) {
    try {
        const response = await baseAPI.post("/QuanLyPhim/CapNhatPhimUpload", values)
        return response.data?.content
    } catch (error) {
        alert(error.response.data.content)
        throw error.response.data.content
    }
}

export async function getMoviesSearch(searchTerm, page) {
    try {
        const response = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang", {
            params: {
                soTrang: page,
                maNhom: "GP09",
                tenPhim: searchTerm,
                soPhanTuTrenTrang: 3,
            }
        })
        return response.data.content;
    } catch (error) {
        throw error.response.data.content
    }
}
