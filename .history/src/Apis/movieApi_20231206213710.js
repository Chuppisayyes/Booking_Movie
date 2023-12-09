import baseAPI from "./baseApi";


async function getBanner () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}

async function getListOfFilm () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhim");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}
async function getListOfFlimByPages () {
    
}
// async function getListOfFilm () {
// }
// async function getListOfFilm () {
// }
// async function getListOfFilm () {
// }
// async function getListOfFilm () {
// }
// async function getListOfFilm () {
// }
// async function getListOfFilm () {
// }

export {
    getBanner,
    getListOfFilm,
}