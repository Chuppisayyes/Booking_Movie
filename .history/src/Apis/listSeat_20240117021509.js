import baseAPI from "./baseApi";

export async function getListSeat(Id) {
  try {
    const getListSeat = await baseAPI.get("/QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: Id,
      },
    });
    return getListSeat.data.content;
  } catch (error) {
    throw error.response?.data?.content;
  }
}
export async function postTicketSeat(seat) {
  try {
    const postSeat = await baseAPI.post("/api/QuanLyDatVe/DatVe");
  } catch (error) {}
}
export async function getTicketRoomList(showstimeId) {
  try {
      const response = await baseAPI.get("/QuanLyDatVe/LayDanhSachPhongVe", {
          params: {
              MaLichChieu: showstimeId
          }
      })
      return response.data.content
  } catch (error) {
      throw error.response.data.content
  }
}

export async function addTicket(values) {
  try {
      const response = await baseAPI.post("/QuanLyDatVe/DatVe", values)
      return response.data.content
  } catch (error) {
      throw error.response.data.content
  }
}