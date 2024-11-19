import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Tela.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("E-mail:", email, "Senha:", password);
  };

  return (
    <div className="login-container">
      <p className="subtitle">A partir de agora você controla sua rotina</p>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="input-container">
          <label>Usuario</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <Link to="/Registradoenca" className="button">
        Acessar <span className="arrow">→</span>
        </Link>

        <div className="links">
          <Link to="/Recuperacao">Esqueceu a senha?</Link>
          <Link to="/register">Ainda não possui uma conta? Crie uma agora.</Link>
        </div>
      </form>
      <footer className="footer">
        Precisa de ajuda com o acesso? <a href="#">Toque Aqui.</a>
      </footer>
    </div>
  );
}

export default Login;

