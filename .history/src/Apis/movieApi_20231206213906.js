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
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}
async function getListOfFimsByDays () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhimPhanTrang");
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
    getListOfFlimByPages,
}