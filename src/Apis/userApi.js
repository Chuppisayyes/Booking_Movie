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
