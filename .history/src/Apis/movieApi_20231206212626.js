import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const response = await baseAPI.get("/QuanLyPhim/r")
    } catch (error) {
        
    }
    return 1;
}