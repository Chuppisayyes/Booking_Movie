import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        res = {
            data:{
                satt
            }
        }
    } catch (error) {
        
    }
    return 1;
}