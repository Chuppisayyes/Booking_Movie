import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const response = await baseAPI.get("/QuanLyPhim/laydanhsachbanner")
    } catch (error) {
        
    }
    return 1;
}