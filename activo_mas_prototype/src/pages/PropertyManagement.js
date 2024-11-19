import React, { useState } from 'react';
import './PropertyManagement.css'; // Archivo de estilos actualizado

function PropertyManagement() {
  const [properties, setProperties] = useState([
    { id: 1, name: 'Propiedad 1', tenant: 'Juan Pérez', status: 'Disponible' },
    { id: 2, name: 'Propiedad 2', tenant: 'María López', status: 'Ocupada' },
    { id: 3, name: 'Propiedad 3', tenant: 'Carlos García', status: 'Disponible' },
  ]);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  return (
    <div className="property-management">
      <h2>Gestión de Propiedades</h2>
      <table className="property-table">
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
              <td>{property.name}</td>
              <td>{property.tenant}</td>
              <td className={`status ${property.status === 'Disponible' ? 'available' : 'occupied'}`}>
                {property.status}
              </td>
              <td>
                <button className="edit-btn" onClick={() => alert(`Editando ${property.name}`)}>
                  Editar
                </button>
                <button className="delete-btn" onClick={() => handleDelete(property.id)}>
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyManagement;
