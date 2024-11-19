import React from 'react';
import './Login.css';
import logo from '../assets/logo.jpg'; // Importa el logo

function Login({ onLogin }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin();
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Logo Empresa" className="login-logo" />
                <h1>Iniciar Sesión</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Usuario" className="login-input" required />
                    <input type="password" placeholder="Contraseña" className="login-input" required />
                    <button type="submit" className="login-button">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
