import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import { AuthProvider } from './services/springApi/AuthContext';

import Home from './pages/Home';
import CadastroUsuario from './pages/CadastroUsuario';


function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="/home" element={<Home />} />
                        </Route>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastrarUsuario" element={<CadastroUsuario />} />
                    </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
