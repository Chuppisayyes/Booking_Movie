import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const response = await baseAPI.get("/QuanLyPhim/laydanhsachban")
    } catch (error) {
        
    }
    return 1;
}