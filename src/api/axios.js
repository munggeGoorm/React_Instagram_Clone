import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:8080/api/v1",
    headers: {
        "Content-type":"application/json;charset=UTF-8",
        "Accept": "application/json",
        'Access-Control-Allow-Origin': "http://localhost:8080",
        'Access-Control-Allow-Credentials' : "true",
    },
    // withCredentials: "true"
});