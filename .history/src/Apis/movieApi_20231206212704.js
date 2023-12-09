import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const resp = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner", {
        
        });
    } catch (error) {
        
    }
    return 1;
}