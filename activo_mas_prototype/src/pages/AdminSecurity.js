import React, { useState } from 'react';
import './AdminSecurity.css'; // Archivo de estilos actualizado

function AdminSecurity() {
  const [users, setUsers] = useState([
    { id: 1, username: 'Administrador', role: 'Admin' },
    { id: 2, username: 'Juan Pérez', role: 'Usuario' },
    { id: 3, username: 'María López', role: 'Usuario' },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="admin-security-container">
      <h2>Administración y Seguridad</h2>
      <p>Gestiona roles, permisos, políticas de acceso y recursos documentales.</p>

      {/* Gestión de Usuarios y Roles */}
      <section>
        <h3>Gestión de Usuarios y Roles</h3>
        <p>Gestiona los usuarios registrados y asigna roles según sus permisos.</p>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-btn" onClick={() => alert(`Editando ${user.username}`)}>
                    Editar
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Políticas de Seguridad */}
      <section>
        <h3>Políticas de Seguridad</h3>
        <p>
          Configura políticas de acceso, protección de datos y permisos especiales para mantener la seguridad de la plataforma.
        </p>
      </section>

      {/* Gestión de Recursos */}
      <section>
        <h3>Gestión de Recursos</h3>
        <p>Controla documentos y otros recursos compartidos en el sistema.</p>
      </section>
    </div>
  );
}

export default AdminSecurity;
