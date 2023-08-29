import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

function AnalyticsGraph() {
  // Mock data for the graph 
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Number of Conversations',
        data: [50, 75, 100, 60, 90], 
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Options for the graph
  const options = {
    labels,
    scales: {
        x: {
          type: 'category', // Make sure this is specified for the x-axis
          title: {
            display: true,
            text: 'Days of the Week',
          },
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Number of Conversations',
          },
        },
      },
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Conversations by Day</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default AnalyticsGraph;
