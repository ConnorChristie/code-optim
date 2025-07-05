'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#e5e7eb',
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    tooltip: {
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      borderColor: 'rgba(99, 102, 241, 0.2)',
      borderWidth: 1,
      titleColor: '#e5e7eb',
      bodyColor: '#9ca3af',
      cornerRadius: 8,
      padding: 12,
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            if (context.datasetIndex === 0) {
              label += '$' + context.parsed.y.toFixed(0);
            } else {
              label += context.parsed.y.toFixed(1) + ' kg';
            }
          }
          return label;
        }
      }
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: 'Monthly Cost ($)',
        color: '#10b981',
      },
      ticks: {
        color: '#10b981',
        callback: function(value) {
          return '$' + value;
        }
      },
      grid: {
        color: 'rgba(16, 185, 129, 0.1)',
      },
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'CO₂ Emissions (kg)',
        color: '#3b82f6',
      },
      ticks: {
        color: '#3b82f6',
        callback: function(value) {
          return value + ' kg';
        }
      },
      grid: {
        drawOnChartArea: false,
        color: 'rgba(59, 130, 246, 0.1)',
      },
    },
    x: {
      ticks: {
        color: '#9ca3af',
      },
      grid: {
        color: 'rgba(255,255,255,0.05)',
      },
    },
  },
}

// Monthly data for the last 12 months
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Mock data showing cost reduction and carbon impact over time
const costData = [3200, 3150, 3000, 2800, 2650, 2500, 2400, 2300, 2200, 2100, 2000, 1950]
const carbonData = [450, 440, 420, 390, 370, 350, 335, 325, 315, 305, 295, 285]

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Monthly Cloud Cost',
      data: costData,
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y',
    },
    {
      label: 'CO₂ Emissions',
      data: carbonData,
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
      yAxisID: 'y1',
    },
  ],
}

export function CostCarbonChart() {
  return (
    <div className="w-full h-[300px] flex px-2">
      <Line options={options} data={data} className="w-full" />
    </div>
  )
} 