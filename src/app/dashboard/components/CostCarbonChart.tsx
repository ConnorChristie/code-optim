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
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#e5e7eb',
      },
    },
    tooltip: {
      backgroundColor: 'rgba(17, 24, 39, 0.95)',
      borderColor: 'rgba(99, 102, 241, 0.2)',
      borderWidth: 1,
      titleColor: '#e5e7eb',
      bodyColor: '#9ca3af',
      cornerRadius: 8,
    },
  },
  scales: {
    y: {
      type: 'linear',
      position: 'left',
      title: {
        display: true,
        text: 'Amplitude',
        color: '#a78bfa',
      },
      ticks: {
        color: '#a78bfa',
      },
      grid: {
        color: 'rgba(167, 139, 250, 0.1)',
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

// Generate a simple sine wave for demonstration
const POINTS = 100
const labels = Array.from({ length: POINTS }, (_, i) => i.toString())
const sineWave = Array.from({ length: POINTS }, (_, i) =>
  Math.sin((i / POINTS) * 4 * Math.PI)
)

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'Sine Wave',
      data: sineWave,
      borderColor: 'rgb(99, 102, 241)',
      backgroundColor: 'rgba(99, 102, 241, 0.4)',
      tension: 0.4,
      fill: true,
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