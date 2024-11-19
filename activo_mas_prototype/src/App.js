import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PropertyManagement from './pages/PropertyManagement';
import Referrals from './pages/Referrals';
import ProfitCalculator from './pages/ProfitCalculator';
import AdminSecurity from './pages/AdminSecurity';
import CMS from './pages/CMS';
import Brokerage from './pages/Brokerage';
import DataUpload from './pages/DataUpload';
import Reports from './pages/Reports';
import Marketing from './pages/Marketing';
import Tutorials from './pages/Tutorials';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Lógica para manejar el cierre de sesión
  const handleLogout = () => {
    setIsAuthenticated(false); // Cambia el estado de autenticación a falso
  };

  return (
    <Router>
      <Routes>
        {/* Redirección según el estado de autenticación */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Login onLogin={() => setIsAuthenticated(true)} />
            )
          }
        />
        {/* Rutas para los diferentes módulos */}
        <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
        <Route path="/properties" element={<PropertyManagement />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/profits" element={<ProfitCalculator />} />
        <Route path="/admin-security" element={<AdminSecurity />} />
        <Route path="/cms" element={<CMS />} />
        <Route path="/brokerage" element={<Brokerage />} />
        <Route path="/data-upload" element={<DataUpload />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </Router>
  );
}

export default App;
