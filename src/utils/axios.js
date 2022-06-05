import axios from "axios"

const baseApiUrl = process.env.REACT_APP_API_URL

const axiosInstance = axios.create({
    // baseURL: `https://cors-anywhere.herokuapp.com/${baseApiUrl}`,
    baseURL: `${baseApiUrl}`,
});

axiosInstance.interceptors.request.use(
    (conf) => {
        conf.headers['Content-Type'] = 'application/json, */*';
        conf.headers['Access-Control-Allow-Origin'] = '*'
        conf.headers['Access-Control-Allow-Credentials'] = "false"
        conf.headers['Access-Control-Allow-Methods'] = "GET"
        conf.headers['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"
        
        return conf
    }
)

export default axiosInstance