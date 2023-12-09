import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");

        return res.data.content
    } catch (error) {
        
    }
    return 1;
}