import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 82fb7bad990c3cf88af2bfbc20a127496b8e12724742862bb8632f865a6ac2cb" 
    }
})