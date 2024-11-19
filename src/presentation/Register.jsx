import React from "react";
import "./styles/Register.css";

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Registro</h1>
        <form className="register-form">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" placeholder="Digite seu nome" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Digite seu email" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Digite sua senha" />

          <button type="submit" className="register-button">Confirmar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;






