import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function AnalyticsGraph({ data }) {
  const [colorMapping, setColorMapping] = useState({});

  // Generate random colors for new tags and store them in colorMapping state
  useEffect(() => {
    const newColorMapping = {};
    data.forEach((item) => {
      if (!colorMapping[item.tag]) {
        newColorMapping[item.tag] = getRandomColor();
      }
    });
    setColorMapping((prevColorMapping) => ({
      ...prevColorMapping,
      ...newColorMapping,
    }));
  }, [data]);

  const labels = data.map((item) => item.tag);
  const counts = data.map((item) => item.count);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Conversation Count',
        backgroundColor: labels.map((tag) => colorMapping[tag] || getRandomColor()), // Use stored color or generate a new one
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: counts,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-4 w-auto h-[50rem]">
      <h2 className="text-xl mb-4">Conversations by Day</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default AnalyticsGraph;
