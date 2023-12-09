import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        res = {
            
        }
    } catch (error) {
        
    }
    return 1;
}