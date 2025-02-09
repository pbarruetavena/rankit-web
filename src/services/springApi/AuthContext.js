import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "./api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erroLogin, setErroLogin] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function carregarUsuario() {
            try {
                const response = await api.get("/auth/usuario");
                if (response.data) {
                    setUsuario(response.data);
                }
            } catch (error) {
                setUsuario(null);
            } finally {
                setLoading(false);
            }
        }
        carregarUsuario();
    }, []);

    const login = async (email, senha) => {
        setErroLogin("");


        try {
            await api.post("/auth/login", { email, senha }, { headers: { "Content-Type": "application/json" } });
            const userResponse = await api.get("/auth/usuario");
            setUsuario(userResponse.data);
            navigate("/home");
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErroLogin("Usuário ou senha incorretos!");
            } else {
                setErroLogin("Erro ao tentar fazer login. Tente novamente.");
            }
        }
    };

    const logout = async () => {
        await api.post("/auth/logout");
        setUsuario(null);
        navigate("/login");
    };


    return (
        <AuthContext.Provider value={{ usuario, loading, erroLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
