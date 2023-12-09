import baseAPI from "./baseApi";


async function getBanner () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}

async function getFilm () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachPhim");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}