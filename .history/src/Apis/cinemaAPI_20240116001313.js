import baseApi from "./baseApi";

export async function getMovieDetails(movieId) {
  try {
    const resp = await baseApi.get("quanlyrap/laythongtinlichchieuphim", {
      params: {
        maPhim: movieId,
      },
    });
    return resp.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
export async function getSystemCinema() {
  try {
    const reps = await baseApi.get("QuanLyRap/LayThongTinHeThongRap");
    return reps.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}

export async function getMovieShowtimes(movieId) {
    try {
        const response = await baseAPI.get("/QuanLyRap/LayThongTinLichChieuPhim", {
            params: {
                MaPhim: movieId,
            }
        });
        return response.data.content
    } catch (error) {
        throw error.response.data.content
    }
};

export async function getCinemaSystems() {
    try {
        const response = await baseAPI.get("QuanLyRap/LayThongTinHeThongRap")
        return response.data.content;
    } catch (error) {
        throw error.response.data.content;
    }
}

export async function getCinemaDetails(cinemasId) {
    try {
        const response = await baseAPI.get("/QuanLyRap/LayThongTinCumRapTheoHeThong", {
            params: {
                maHeThongRap: cinemasId
            }
        });
        return response.data.content;

    } catch (error) {
        throw error.response.data.content;
    }
}

export async function getShowtimes(cinemasId) {
    try {
        const response = await baseAPI.get("/QuanLyRap/LayThongTinLichChieuHeThongRap", {
            params: {
                maHeThongRap: cinemasId
            }
        });
        return response.data.content;
    } catch (error) {
        throw error.response.data.content;
    }
}