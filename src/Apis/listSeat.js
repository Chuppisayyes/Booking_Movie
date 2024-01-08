import baseAPI from "./baseApi";

export async function getListSeat(Id) {
  try {
    const getListSeat = baseAPI("/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: Id,
      },
    });
    return getListSeat.content.danhSachGhe;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
