import baseAPI from "./baseApi";


export async function getMoviesAPI () {
    try {
        const response = await baseAPI.get("QuanLy")
    } catch (error) {
        
    }
    return 1;
}