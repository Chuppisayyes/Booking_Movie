import baseAPI from "./baseApi";


export async function getBannerAPI () {
    try {
        const res = await baseAPI.get("/QuanLyPhim/LayDanhSachBanner");
        return res.data.content;
    } catch (error) {
        return res.data.mes
    }
    return 1;
}