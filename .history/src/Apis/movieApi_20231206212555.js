import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const response = await baseAPI.get("/QuanLyPhim/Lay")
    } catch (error) {
        
    }
    return 1;
}