import axios from "./index";

const UserRegister = {
    async userRegister(user) {
        const response = await axios.post("/users", {user})
        return response
    },
    async userLogin(user) {
        const response = await axios.post("/auth/login", {user})
        return response
    }
}

export default UserRegister