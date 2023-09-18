import axios from 'axios'

//Create Axios instance
const service = axios.create({
    baseURL: 'http://localhost:5000', //process.env.REACT_APP_LOCALHOST, // 
    timeout: 0, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // const token = localStorage.getItem('access')
        // console.log('alaws?');
        // return false
        // if (token) {
            // config.headers['Authorization'] = 'Bearer '+localStorage.getItem('access')
        // }
        config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(

    (resp) => {

        // if(resp.data.token){
        //     console.log('Received access token')
        //     localStorage.setItem('access', resp.data.token)
        //     localStorage.setItem('role', resp.data.role)
        //     localStorage.setItem('name', resp.data.name)
        // }else{
        //     console.log('Access token not expired yet.');
        // }
        
        
        return resp
    },
    (err) => {
        console.log('--- Interceptor Err handler ---')
        // console.log(err)
        // Cant redirect here due to react hook rule???
        // if(err.response.status === 401 || err.response.status === 403) {
            // window.location.href = '/ecadminloginSheeeesh'
            
        // }
        return Promise.reject(err.response)
    }

);


export default service