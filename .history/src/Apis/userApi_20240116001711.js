import baseAPI from "./baseApi";

export const signin = async (payload) => {
  try {
      const response = await baseAPI.post("/QuanLyNguoiDung/DangNhap", payload);
      return response.data?.content;
  } catch (error) {
      throw error.response.data?.content;
  }
}
export const signup = async (payload) => {
  try {
      const response = await baseAPI.post("/QuanLyNguoiDung/DangKy", payload);
      return response.data?.content;
  } catch (error) {
      alert(error.response.data?.content)
      throw error.response.data?.content;
  }
}
export async function getListUser() {
  try {
    const resp = await baseAPI.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP09",
      },
    });
    return resp.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}
export async function addUser() {
  try {
    const reps = await baseAPI.post("/QuanLyNguoiDung/ThemNguoiDung");
    return reps.data.content;
  } catch (error) {
    if (error.content) {
      throw error.response.data?.content;
    }
    throw error?.message;
  }
}
export async function findUser(userName) {
  try {
    const resp = await baseAPI.get(`/QuanLyNguoiDung/TimKiemNguoiDung?tuKhoa=${userName}`, {
      params: {
        maNhom: "GP09",
      },
    });
    return resp.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response?.data?.content;
    }
    throw error.message;
  }
}
export async function getListUserPagination(pages, sophantutrang) {
  try {
    const reps = await baseAPI.get(
      `/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?soTrang=${pages}&soPhanTuTrenTrang=${sophantutrang}`,
      {
        params: {
          maNhom: "GP09",
        },
      }
    );
    return reps.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response?.data?.content;
    }
    throw error.message;
  }
}
