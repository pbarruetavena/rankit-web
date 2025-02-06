import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8080/rankitapi/users', {
                name,
                email
            });
            // Após cadastrar, recuperar todos os usuários
            const response = await axios.get('http://localhost:8080/rankitapi/users');
            setUsers(response.data);
        } catch (error) {
            setError('Erro ao cadastrar o usuário' + error.message);
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <h3>Usuários Cadastrados:</h3>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default LoginForm;
