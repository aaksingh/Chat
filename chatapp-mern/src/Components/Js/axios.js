import axios from "axios"
const instance = axios.create({
    baseURL:"https://chatappinmern.herokuapp.com",
});

export default instance