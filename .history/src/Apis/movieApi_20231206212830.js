import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        res = {
            data:{
                s
            }
        }
    } catch (error) {
        
    }
    return 1;
}