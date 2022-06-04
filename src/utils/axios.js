import axios from "axios"

const baseApiUrl = "http://localhost:8010/proxy"

const axiosInstance = axios.create({
    // withCredentials: true,
    // baseURL: `https://cors-anywhere.herokuapp.com/${baseApiUrl}`,
    baseURL: `${baseApiUrl}`,
});

axiosInstance.interceptors.request.use(
    (conf) => {
        conf.headers['Content-Type'] = 'application/json, */*';
        // conf.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
        conf.headers['Access-Control-Allow-Origin'] = '*'
        conf.headers['Access-Control-Allow-Credentials'] = "true"
        conf.headers['Access-Control-Allow-Methods'] = "GET"
        conf.headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"
        
        return conf
    }
    // {
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //         'Access-Control-Allow-Headers': 'X-Requested-With, privatekey'
    //     },
    // }
)

// axiosInstance.interceptors.response.use(
//     function (error) {
//         if (error) {
//             alert("ada yang salah")
//         }
//     }
// )

export default axiosInstance