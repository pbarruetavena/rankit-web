import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../services/springApi/AuthContext";

const ProtectedRoute = () => {
    const { usuario, loading } = useContext(AuthContext);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return usuario ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
