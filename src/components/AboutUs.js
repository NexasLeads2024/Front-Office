"use client";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import Link from "next/link";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useState, useEffect } from "react";

// Register the necessary Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const AboutUs = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.AboutUs : En.AboutUs;

  // Function to generate a base data set
  const generateBaseData = () => {
    return Array.from({ length: 7 }, () => 50);
  };

  // State for chart data
  const [chartData, setChartData] = useState({
    labels: Array(7).fill(""), // Empty labels for bars
    datasets: [
      {
        label: "Monthly Data",
        data: generateBaseData(),
        backgroundColor: "#e24545",
        borderColor: "#e24545",
        borderWidth: 1,
      },
    ],
  });

  // Function to generate animated data with smooth variation
  const generateAnimatedData = () => {
    const time = Date.now() / 1000; // Use current time for smooth animation
    return chartData.datasets[0].data.map((value, index) => {
      // Smooth sine wave animation with varying frequency and amplitude
      const freq = (index + 1) * 0.5;
      const amp = 10;
      const newValue = value + Math.sin(time * freq) * amp + (Math.random() - 0.5) * 5;
      return Math.max(0, Math.min(100, newValue)); // Ensure values stay within 0-100
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: generateAnimatedData(),
          },
        ],
      }));
    }, 100); // Update data every 100 milliseconds

    return () => clearInterval(interval);
  }, [chartData]);

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 100,
        ticks: {
          display: false, // Disable the numbers on the y-axis
        },
      },
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false, // Hide the x-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend to disable the label
      },
      tooltip: {
        callbacks: {
          label: function () {
            return ''; // Return an empty string to remove the number from the tooltip
          },
        },
      },
      // Custom plugin to add the label at the bottom
      datalabels: {
        display: false, // Ensure default datalabels plugin is not used
      },
      // Custom plugin to add a text label at the bottom
      annotation: {
        annotations: {
          label: {
            type: 'label',
            xValue: 3.5, // Center position
            yValue: -15, // Adjust vertical position if needed
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            font: {
              size: 24, // Font size for the label
              weight: 'bold',
            },
            content: 'Qualified Leads',
            color: '#e24545', // Text color
          },
        },
      },
    },
    animation: {
      duration: 0, // Disable animation during data updates
    },
  };

  return (
    <div className="mt-10 mb-10 sm:pl-20 sm:pr-20 pl-5 pr-5 pt-10 flex flex-col sm:flex-row-reverse bg-slate-400 bg-opacity-15 items-center justify-between sm:pt-10 sm:pb-10">
      <div className="sm:w-1/2 w-full mt-8 sm:mt-0">
        <h2 className="my-4 font-bold text-2xl sm:text-4xl text-center sm:mt-20 -mt-10">
          {data.heading}
          <span className="text-[#e24545]"> {data.heading1} </span>
        </h2>
        <p className="text-gray-700 text-sm sm:text-lg px-4 sm:px-8 text-center sm:text-left">
          {data.description}
        </p>
        <Link href={`/${locale}/ContactUs`}>
        <button className="cursor-pointer transition-all duration-500 p-[10px] rounded-[24px] flex items-center justify-center gap-4 bg-gradient-to-r bg-[#e24545] hover:bg-black w-full max-w-[300px] mx-auto">
          <span className="text-[1.5rem] font-bold text-white tracking-wider">
          {data.button}
          </span>
        </button>
      </Link>      
      </div>
      <div className="sm:w-1/2 w-full px-0 sm:px-8 flex items-center justify-center sm:mt-20 mt-10 sm:mb-10 -mb-10">
        <div className="w-full h-64 sm:h-80">
          <Bar data={chartData} options={chartOptions} />
        </div>  
      </div>
    </div>
  );
};

export default AboutUs;
