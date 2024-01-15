import axios from "axios";

const baseAPI = axios.create({
    baseURL: "https://movienew.cybersoft.edu.vn/api",
    headers: {
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwNTAiLCJIZXRIYW5UaW1lIjoiMTcxNjUwODgwMDAwMCIsIm5iZiI6MTY4Nzg4NTIwMCwiZXhwIjoxNzE2NjU2NDAwfQ._c8SyKF5Fi2PgVWPPfYyvKMUVpCkteMNUebZfFUY3nU"
    }
});
baseAPI.interceptors.request.use(
    (request) => {
        //kiểm tra xem user đã đăng nhập hay chưa, để thêm token của user vào headers
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (user) {
            request.headers.Authorization = `Bearer ${user.accessToken}`;
        }
        return request;
    }
)

baseAPI.interceptors.response.use(
    (response) => {
        //thay đổi respone trước khi trả về
        //return response.data.content
        return response;
    },
    (error) => {
        //Kiểm tra nếu lỗi là 401 => token ko hợp lệ => đăng xuất user
        if (error.response.status === 401) {
            localStorage.removeItem("currentUser");
            window.location.replace("/sign-in");
        }
        return Promise.reject(error);
    }
)

export default baseAPI;