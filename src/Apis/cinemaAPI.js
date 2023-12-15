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
