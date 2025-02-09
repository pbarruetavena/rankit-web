import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8080/rankitapi', 
});

class loginService {

    async cadastrarUsuario(nome, email, senha) {
        return api.post("/cadastrarUsuario", {nome, email, senha});
    }

    async autenticarUsuario(email, senha) {
        const response = await api.post("/auth/login", { email, senha });
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
        }
        return response.data;
    }


}

export default new loginService();