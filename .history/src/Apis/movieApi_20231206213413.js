import baseAPI from "./baseApi";


function getBannerAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}

export async function getBannerAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        throw error.res?.data?.content;
    }
}