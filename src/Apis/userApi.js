import baseAPI from "./baseApi";

export async function signinAPI(credential) {
  try {
    const reps = await baseAPI.post("/quanlynguoidung/dangnhap", credential);
    return reps.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
  }
}
export async function signupAPI(credential) {
  try {
    const reps = await baseAPI.post("/quanlynguoidung/dangky", credential);
    return reps.data.content;
  } catch (error) {
    if (error.response) {
      throw error.response.data?.content;
    }
    throw error.message;
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
    const resp = await baseAPI.get("/QuanLyNguoiDung/TimKiemNguoiDung", {
      params: {
        maNhom: "GP09",
        userName,
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
