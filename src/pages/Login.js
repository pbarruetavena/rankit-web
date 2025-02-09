import { useState, useContext } from "react";
import { AuthContext } from "../services/springApi/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const { login, erroLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, senha);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
            <a href="/cadastrarUsuario">Registrar-se</a>
            {erroLogin && <p style={{ color: "red" }}>{erroLogin}</p>}
        </div>
    );
};

export default Login;
