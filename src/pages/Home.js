import React, {useContext} from "react";
import { AuthContext } from "../services/springApi/AuthContext";
import { useNavigate } from "react-router-dom";


const Home = () => {
    const { usuario, logout } = useContext(AuthContext);


    return (
        <div>
            { usuario ? (
                <><h2>Bem vindo, {usuario.name}</h2>
                <button onClick={logout}>Sair</button></>
            ) : (
                <a href="/login">Entrar</a>
            )}
        </div>
    );
    
};

export default Home;