import axios from 'axios'
import qs from 'qs'
// import router from '../router'


const instance = axios.create({
    baseURL: '/api',
    timeout: 10000,
})

instance.interceptors.request.use(config => {
    if(config.method.toUpperCase() === 'POST' && (config.data instanceof Object)){
        config.data = qs.stringify(config.data)
    }
    return config;
})

instance.interceptors.response.use(
    response => response.data,
    // error => {
    //     return new Promise(() => {})
    // }
)

export default instance