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
      position: 'top' as const,
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
            label += '+' + context.parsed.y.toFixed(1) + '%';
          }
          return label;
        }
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Performance Improvement (%)',
        color: '#9ca3af',
      },
      ticks: {
        color: '#9ca3af',
        callback: function(value) {
          return value + '%';
        }
      },
      grid: {
        color: 'rgba(255,255,255,0.05)',
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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Overall Performance',
      data: [0, 5, 8, 15, 20, 22, 24.3],
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'Memory Optimization',
      data: [0, 3, 10, 12, 18, 20, 22],
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true,
    },
    {
      label: 'CPU Efficiency',
      data: [0, 2, 5, 8, 12, 15, 18],
      borderColor: 'rgb(251, 146, 60)',
      backgroundColor: 'rgba(251, 146, 60, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
}

export function PerformanceChart() {
  return (
    <div className="w-full h-[300px] flex px-2">
      <Line options={options} data={data} className="w-full" />
    </div>
  )
} 