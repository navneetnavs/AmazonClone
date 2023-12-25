import axios from "axios"

const instance = axios.create({
    baseURL:'http://127.0.0.1:5001/challenge-c001d/us-central1/apo'
});
export default instance;