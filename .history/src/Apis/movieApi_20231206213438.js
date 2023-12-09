import baseAPI from "./baseApi";


async function getBannerAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}

async function getBaAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}