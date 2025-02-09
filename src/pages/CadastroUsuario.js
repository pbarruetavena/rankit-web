import React, { useState, useContext } from "react";
import UsuarioService from "../services/springApi/UsuarioService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const CadastroUsuario = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [username, setUsername] = useState("");
    const [erroCadastro, setErroCadastro] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            alert('dentro do try');
            await UsuarioService.cadastrar(name, email, senha, username);
            navigate("/login");
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setErroCadastro("E-mail já cadastrado!");
            } else {
                setErroCadastro("Erro ao cadastrar usuário. Tente novamente.");
            }
        }
        
    };

    return (
        <div>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                <button type="submit" onSubmit={handleSubmit}>Cadastrar</button>
            </form>

            {erroCadastro && <p style={{ color: "red" }}>{erroCadastro}</p>}

            <p>
                Já tem uma conta? <Link to="/login">Faça login</Link>
            </p>
        </div>
    );
};

export default CadastroUsuario;
