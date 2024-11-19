import React, { useState } from "react";
import "./styles/Medicacao.css";

const Medicacao = () => {
  const [showHorariosModal, setShowHorariosModal] = useState(false);
  const [showDataInicioModal, setShowDataInicioModal] = useState(false);
  const [showDataFimModal, setShowDataFimModal] = useState(false);

  return (
    <div className="container">
      <h1>Medicação</h1>
      <input type="text" placeholder="Nome da medicação" />
      <input type="text" placeholder="Frequência" />

      {/* Horários */}
      <div>
        <input
          type="text"
          placeholder="Horários"
          readOnly
          onClick={() => setShowHorariosModal(true)}
        />
        {showHorariosModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Escolher horário</h2>
              <input type="time" />
              <button onClick={() => setShowHorariosModal(false)}>OK</button>
            </div>
          </div>
        )}
      </div>

      {/* Data de início */}
      <div>
        <input
          type="date"
          placeholder="Data de início"
          onClick={() => setShowDataInicioModal(true)}
        />
        {showDataInicioModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Escolha a data</h2>
              <input type="date" />
              <button onClick={() => setShowDataInicioModal(false)}>OK</button>
            </div>
          </div>
        )}
      </div>

      {/* Data do fim do uso */}
      <div>
        <input
          type="date"
          placeholder="Data do fim do uso"
          onClick={() => setShowDataFimModal(true)}
        />
        {showDataFimModal && (
          <div className="modal">
            <div className="modal-content">
              <h2>Escolha a data</h2>
              <input type="date" />
              <button onClick={() => setShowDataFimModal(false)}>OK</button>
            </div>
          </div>
        )}
      </div>

      <button>Confirmar</button>
    </div>
  );
};

export default Medicacao;
