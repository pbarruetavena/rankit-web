import React, { useState } from "react";
import api from './api';

class UsuarioService {
    async cadastrar(name, email, senha, username) {
        alert('dentro da funca');
        return api.post("/cadastrar", { name, email, senha, username }, {
            headers: { "Content-Type": "application/json" },
        });
    }

    async obterUsuario() {
        return api.get("/usuario");
    }
} 

export default UsuarioService;