import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import './Reports.css'; // Archivo de estilos

// Registra los componentes necesarios
ChartJS.register(ArcElement, Tooltip, Legend);

function Reports() {
  const data = {
    labels: ['Propiedades Disponibles', 'Propiedades Ocupadas', 'Morosidad'],
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true, // Mantener proporciones
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
    },
  };

  return (
    <div className="reports-container">
      <h2>Reportes y Análisis</h2>
      <div className="chart-container">
        <Pie data={data} options={options} />
      </div>
      <button className="download-button" onClick={() => alert('Generando Reporte...')}>Descargar Reporte</button>
    </div>
  );
}

export default Reports;
