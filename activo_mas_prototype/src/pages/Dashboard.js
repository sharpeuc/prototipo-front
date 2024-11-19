import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css';
import logo from '../assets/logo.jpg'; // Logo de la empresa

function Dashboard({ onLogout, userName = "Usuario" }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Llama la función pasada como prop desde App.js
    }
    navigate('/'); // Redirige al login
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <img src={logo} alt="Logo Empresa" className="dashboard-logo" />
        <ul>
          <li><Link to="/properties">Gestión de Propiedades</Link></li>
          <li><Link to="/referrals">Programa de Referidos</Link></li>
          <li><Link to="/profits">Inversiones</Link></li>
          <li><Link to="/admin-security">Administración y Seguridad</Link></li>
          <li><Link to="/cms">CMS (Contenido y Podcasts)</Link></li>
          <li><Link to="/brokerage">Corretaje y Administración</Link></li>
          <li><Link to="/data-upload">Carga de Datos</Link></li>
          <li><Link to="/reports">Reportes y Análisis</Link></li>
          <li><Link to="/marketing">Campañas de Marketing</Link></li>
          <li><Link to="/tutorials">Cápsulas Educativas</Link></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout} aria-label="Cerrar sesión">
          Cerrar Sesión
        </button>
      </aside>
      <main className="dashboard-main">
        <h1>Bienvenido a Activomas, {userName}</h1>
        <p>Utiliza el menú para explorar todas las opciones y herramientas de la plataforma.</p>
      </main>
      <footer className="dashboard-footer">
        <h3>Encuéntranos</h3>
        <p>Isidora Goyenechea 3356<br />
          Oficina 61, Las Condes<br />
          Metro El Golf</p>
        <p>Teléfonos:<br />
          +562 2929 5052<br />
          +569 8233 7991</p>
      </footer>
    </div>
  );
}

export default Dashboard;
