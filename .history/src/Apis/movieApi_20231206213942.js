import baseAPI from "./baseApi";


async function getBanner () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}

async function getListOfFilms () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhim");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}
async function getListOfFilmsByPages () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}
async function getListOfFilmsByDays () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimTheoNgay");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}
// async function getListOfFlimByPages () {
    // try {
        // const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
        // return res.data.content;
    // } catch (error) {
        // throw error.res?.data?.content;
    // }
// }
// async function getListOfFlimByPages () {
    // try {
        // const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
        // return res.data.content;
    // } catch (error) {
        // throw error.res?.data?.content;
    // }
// }
// async function getListOfFlimByPages () {
    // try {
        // const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
        // return res.data.content;
    // } catch (error) {
        // throw error.res?.data?.content;
    // }
// }
export {
    getBanner,
    getListOfFilm,
    getListOfFilmsByPages,
    getListOfFilmsByDays
}