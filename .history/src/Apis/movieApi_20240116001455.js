import baseAPI from "./baseApi";

async function getBanners() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}

async function getListOfFilms() {
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
async function getListOfFilmsByPages() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}
async function getListOfFilmsByDays() {
  try {
    const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimTheoNgay");
    return res.data.content;
  } catch (error) {
    throw error.res?.data?.content;
  }
}

export { getBanners, getListOfFilms, getListOfFilmsByPages, getListOfFilmsByDays };
