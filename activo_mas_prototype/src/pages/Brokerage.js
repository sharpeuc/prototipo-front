import React, { useState } from 'react';
import './Brokerage.css';

function Brokerage() {
  const [properties, setProperties] = useState([
    { id: 1, property: 'Propiedad 1', tenant: 'Juan Pérez', status: 'Al día' },
    { id: 2, property: 'Propiedad 2', tenant: 'María López', status: 'Pendiente' },
  ]);

  const [newProperty, setNewProperty] = useState('');
  const [newTenant, setNewTenant] = useState('');
  const [newStatus, setNewStatus] = useState('');

  const addProperty = () => {
    if (newProperty && newTenant && newStatus) {
      const newEntry = {
        id: properties.length + 1,
        property: newProperty,
        tenant: newTenant,
        status: newStatus,
      };
      setProperties([...properties, newEntry]);
      setNewProperty('');
      setNewTenant('');
      setNewStatus('');
    }
  };

  const deleteProperty = (id) => {
    setProperties(properties.filter((prop) => prop.id !== id));
  };

  return (
    <div className="brokerage-container">
      <h2>Corretaje y Administración</h2>
      <p className="brokerage-description">
        Consulta y administra arrendatarios y propiedades.
      </p>

      <table className="brokerage-table">
        <thead>
          <tr>
            <th>Propiedad</th>
            <th>Arrendatario</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.property}</td>
              <td>{property.tenant}</td>
              <td
                className={
                  property.status === 'Al día'
                    ? 'status-on-time'
                    : property.status === 'Pendiente'
                    ? 'status-pending'
                    : 'status-late'
                }
              >
                {property.status}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteProperty(property.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Formulario para agregar nueva propiedad */}
      <div className="brokerage-form">
        <h3>Agregar Propiedad</h3>
        <input
          type="text"
          placeholder="Propiedad"
          value={newProperty}
          onChange={(e) => setNewProperty(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="Arrendatario"
          value={newTenant}
          onChange={(e) => setNewTenant(e.target.value)}
          className="form-input"
        />
        <select
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
          className="form-select"
        >
          <option value="">Seleccionar estado</option>
          <option value="Al día">Al día</option>
          <option value="Pendiente">Pendiente</option>
          <option value="Atrasado">Atrasado</option>
        </select>
        <button className="add-btn" onClick={addProperty}>
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Brokerage;
