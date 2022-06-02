import axios from "axios"

const baseUrl = "https://yuhu.com"

const axiosInstance = axios.create({
    baseURL: `${baseApiUrl}/api/v1`,
});

axiosInstance.interceptors.response.use(
    function (error) {
        if (error) {
            alert("ada yang salah")
        }
    }
)

export default axiosInstance