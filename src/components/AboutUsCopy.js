"use client";
import { useParams } from "next/navigation";
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import Link from "next/link";
// import { Bar, Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   Tooltip,
//   Legend,
// } from "chart.js";
// import { useSelector } from "react-redux";
// ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import { Line } from "react-chartjs-2";
import gif from "../../public/Analyze.gif";
import {
  Chart as ChartJs,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJs.register(
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  Filler
);
import { useState, useEffect } from "react";
import MixedChart from "./MixedChart";
import Image from "next/image";

// Register the necessary Chart.js components

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
      const newValue =
        value + Math.sin(time * freq) * amp + (Math.random() - 0.5) * 5;
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
            return ""; // Return an empty string to remove the number from the tooltip
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
            type: "label",
            xValue: 3.5, // Center position
            yValue: -15, // Adjust vertical position if needed
            backgroundColor: "transparent",
            borderColor: "transparent",
            font: {
              size: 24, // Font size for the label
              weight: "bold",
            },
            content: "Qualified Leads",
            color: "#e24545", // Text color
          },
        },
      },
    },
    animation: {
      duration: 0, // Disable animation during data updates
    },
  };

  return (
    <>
      <div className="flex flex-col-reverse md:flex-row px-8 bg-gray-100 bg-opacity-45 pt-10">
        <div className="min-w-[40%] flex justify-center">
          <div className="relative max-w-80 hidden md:block">
            <Image
              width={100}
              height={100}
              src={gif}
              className="cursor-pointer w-full relative md:-top-4"
            />
            <div className="absolute text-lg text-[#e24545] font-bold max-w-fit end-4 top-1">
              Sales Pipeline
            </div>
          </div>
        </div>
        <div>
          <h2 className=" font-bold text-2xl sm:text-4xl text-start sm:px-8">
            {data.heading}
            <span className="text-[#e24545]"> {data.heading1} </span>
          </h2>
          <div className="relative max-w-80 md:hidden mt-4">
            <Image
              width={100}
              height={100}
              src={gif}
              className="cursor-pointer w-full"
            />
            <div className="absolute text-lg text-[#e24545] font-bold max-w-fit end-4 top-1">
              Sales Pipeline
            </div>
          </div>
          <p className="text-gray-900 text-md sm:text-lg text-start">
            {data.description}
          </p>
          <div className="w-full flex">
            <Link
              href={`/${locale}/ContactUs`}
              class="h-fit w-fit rounded-3xl bg-gradient-to-r from-[#e24545]
            vida-red-500 to-yellow-400 px-[2px] py-[2.6px] group ms-4
            md:px-[2px] md:py-[2px] min-w-[215px] min-h-[43px]
            transition-all duration-300 md:relative md:top-4"
            >
              <div class="flex h-full w-full items-center justify-center bg-white group-hover:bg-[#e24545] rounded-3xl px-3 py-2 transition-all duration-300">
                <h1 class="text-lg font-semibold text-[#e24545] group-hover:text-white text-nowrap">
                  {data.button}
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
