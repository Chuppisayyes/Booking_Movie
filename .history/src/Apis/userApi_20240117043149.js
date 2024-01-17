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
export const getUserInfor = async (taiKhoan) => {
  try {
    const response = await baseAPI.post("/QuanLyNguoiDung/ThongTinTaiKhoan"{
      params: {
        taiKhoan: taiKhoan,
      },
    });
    return response.data.content;
  } catch (error) {
    throw error.response.data;
  }
};


export async function getListUser() {
  try {
    const resp = await baseAPI.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP06",
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
export const getUserList = async (page) => {
  try {
    const response = await baseAPI.get("/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang", {
      params: {
        soTrang: page,
        MaNhom: "GP06",
        soPhanTuTrenTrang: 3,
      }
    });
    return response.data?.content

  } catch (error) {
    throw error.response.data
  }
}
export const deleteUser = async (taiKhoan) => {
  try {
      const response = await baseAPI.delete("/QuanLyNguoiDung/XoaNguoiDung", {
          params: {
              TaiKhoan: taiKhoan
          }
      })
  } catch (error) {
      throw error.response.data
  }
}
export const updateUser = async (taiKhoan) => {
  try {
      const response = await baseAPI.post("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", taiKhoan)
      return response.data.content
  } catch (error) {
      alert(error.response.data.content)
      throw error.response.data.content
  }
}
export const updateUserInfor = async (taiKhoan) => {
  try {
      const response = await baseAPI.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", taiKhoan)
      return response.data.content
  } catch (error) {
      alert(error.response.data.content)
      throw error.response.data.content
  }
}
export const searchUserList = async (searchTerm, page) => {
  try {
      const response = await baseAPI.get("QuanLyNguoiDung/TimKiemNguoiDungPhanTrang", {
          params: {
              soTrang: page,
              MaNhom: "GP06",
              tuKhoa: searchTerm,
              soPhanTuTrenTrang: 3
          }
      })
      return response.data.content
  } catch (error) {
      throw error.response.data
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
        maNhom: "GP06",
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
          maNhom: "GP06",
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
