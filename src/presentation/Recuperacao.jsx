import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Recuperacao.css';

function AccessRecovery() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email para recuperação:", email);
  };

  return (
    <div className="register-container">
    <div className="register-box">
      <h1 className="register-title">Recuperação de acesso</h1>
      <form className="register-form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Digite seu email" />
        <button type="submit" className="register-button">Confirmar</button>
      </form>
    </div>
  </div>
  );
}

export default AccessRecovery;

