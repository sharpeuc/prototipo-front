import React, { useState } from 'react';
import './Referrals.css'; // Archivo de estilos actualizado

function Referrals() {
  const [referrals, setReferrals] = useState([
    { id: 1, name: 'Juan Pérez', commission: 200 },
    { id: 2, name: 'María López', commission: 150 },
  ]);

  const [newReferral, setNewReferral] = useState('');
  const [newCommission, setNewCommission] = useState('');

  const addReferral = () => {
    if (newReferral && newCommission) {
      const newId = referrals.length + 1;
      setReferrals([
        ...referrals,
        { id: newId, name: newReferral, commission: parseFloat(newCommission) },
      ]);
      setNewReferral('');
      setNewCommission('');
    }
  };

  const deleteReferral = (id) => {
    setReferrals(referrals.filter((referral) => referral.id !== id));
  };

  return (
    <div className="referrals-container">
      <h2>Programa de Referidos</h2>
      <p className="referrals-description">Gestión de referidos y cálculo de comisiones.</p>

      <table className="referrals-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Comisión</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral) => (
            <tr key={referral.id}>
              <td>{referral.name}</td>
              <td>${referral.commission}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteReferral(referral.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="referrals-form">
        <h3>Agregar Referido</h3>
        <input
          type="text"
          placeholder="Nombre del referido"
          value={newReferral}
          onChange={(e) => setNewReferral(e.target.value)}
          className="referral-input"
        />
        <input
          type="number"
          placeholder="Comisión ($)"
          value={newCommission}
          onChange={(e) => setNewCommission(e.target.value)}
          className="referral-input"
        />
        <button className="add-btn" onClick={addReferral}>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Referrals;
