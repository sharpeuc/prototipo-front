import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './ProfitCalculator.css'; // Archivo de estilos actualizado

// Registrar los componentes de gráficos necesarios
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ProfitCalculator() {
  const [price, setPrice] = useState('');
  const [monthlyRent, setMonthlyRent] = useState('');
  const [expenses, setExpenses] = useState('');
  const [appreciationRate, setAppreciationRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState('');
  const [paymentOption, setPaymentOption] = useState('contado');
  const [result, setResult] = useState(null);

  const calculateInvestment = () => {
    const annualRent = monthlyRent * 12; // Ingreso anual por arriendo
    const annualNetIncome = annualRent - expenses * 12; // Ingreso neto

    let appreciationFactor = (1 + appreciationRate / 100) ** investmentPeriod; // Factor de plusvalía
    let finalValue = price * appreciationFactor; // Valor final del departamento

    let totalProfit;
    if (paymentOption === 'contado') {
      totalProfit = annualNetIncome * investmentPeriod + (finalValue - price); // Ganancia total al contado
    } else if (paymentOption === 'credito') {
      const totalLoanPayment = monthlyInstallment * 12 * investmentPeriod; // Total pagado por el crédito
      totalProfit = annualNetIncome * investmentPeriod + (finalValue - totalLoanPayment); // Ganancia total con crédito
    }

    const roi = ((totalProfit / price) * 100).toFixed(2); // ROI en porcentaje

    // Guardar resultados
    setResult({
      annualNetIncome: annualNetIncome.toFixed(2),
      finalValue: finalValue.toFixed(2),
      totalProfit: totalProfit.toFixed(2),
      roi,
    });
  };

  const generateGraphData = () => {
    const labels = Array.from({ length: investmentPeriod }, (_, i) => `Año ${i + 1}`);
    const appreciation = Array.from({ length: investmentPeriod }, (_, i) =>
      (price * (1 + appreciationRate / 100) ** (i + 1)).toFixed(2)
    );

    return {
      labels,
      datasets: [
        {
          label: 'Ganancia acumulada por plusvalía ($)',
          data: appreciation,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className="profit-container">
      <h2>Calculadora de Ganancias: Inversión en Departamento</h2>
      <div className="form-section">
        <label>
          <input
            type="radio"
            value="contado"
            checked={paymentOption === 'contado'}
            onChange={() => setPaymentOption('contado')}
          />
          Compra al Contado
        </label>
        <label>
          <input
            type="radio"
            value="credito"
            checked={paymentOption === 'credito'}
            onChange={() => setPaymentOption('credito')}
          />
          Compra con Crédito Hipotecario
        </label>

        <input
          type="number"
          placeholder="Precio del Departamento ($)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Arriendo Mensual ($)"
          value={monthlyRent}
          onChange={(e) => setMonthlyRent(e.target.value)}
        />
        <input
          type="number"
          placeholder="Gastos Mensuales ($)"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
        <input
          type="number"
          placeholder="Tasa de Plusvalía Anual (%)"
          value={appreciationRate}
          onChange={(e) => setAppreciationRate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Plazo de Inversión (años)"
          value={investmentPeriod}
          onChange={(e) => setInvestmentPeriod(e.target.value)}
        />

        {paymentOption === 'credito' && (
          <>
            <input
              type="number"
              placeholder="Monto del Crédito Hipotecario ($)"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <input
              type="number"
              placeholder="Cuota Mensual del Crédito ($)"
              value={monthlyInstallment}
              onChange={(e) => setMonthlyInstallment(e.target.value)}
            />
          </>
        )}

        <button className="calculate-btn" onClick={calculateInvestment}>
          Calcular Inversión
        </button>
      </div>
      {result && (
        <div className="result-section">
          <h3>Resultados</h3>
          <p>Ingreso Neto Anual: ${result.annualNetIncome}</p>
          <p>Valor Final del Departamento: ${result.finalValue}</p>
          <p>Ganancia Total: ${result.totalProfit}</p>
          <p>ROI Total: {result.roi}%</p>
        </div>
      )}
      {result && (
        <div className="chart-section">
          <h3>Proyección de Plusvalía</h3>
          <Line data={generateGraphData()} />
        </div>
      )}
    </div>
  );
}

export default ProfitCalculator;
