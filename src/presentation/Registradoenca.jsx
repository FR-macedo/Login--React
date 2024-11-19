import React from "react";
import { Link } from "react-router-dom";
import "./styles/Register.css";

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <h1 className="register-title">Registro de Doença</h1>
                <form className="register-form">
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" name="nome" placeholder="Nome da Doença" />

                    <label htmlFor="sintomas">Sintomas</label>
                    <input type="text" id="sintomas" name="sintomas" placeholder="Sintomas" />

                    <label htmlFor="data">Data de Diagnóstico</label>
                    <input type="date" id="data" name="data" placeholder="Data de Diagnóstico" />

                    <Link to="/Medicacao" className="register-button-link">
                        <button type="button" className="register-button">Confirmar</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
