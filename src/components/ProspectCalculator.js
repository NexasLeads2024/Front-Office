'use client';
import React, { useState } from 'react';
import En from "../../messages/eng.json"; // Adjust path as necessary
import Fr from "../../messages/fr.json";
import { useParams } from "next/navigation";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ProspectCalculator = () => {
  const [emailProspects, setEmailProspects] = useState(10000);
  const [linkedinProspects, setLinkedinProspects] = useState(700);
  const [whatsappProspects, setWhatsappProspects] = useState(2500);
  const [smsProspects, setSmsProspects] = useState(2500);

  const { locale } = useParams();
  const Data = locale === "fr" ? Fr.ProspectCalculator : En.ProspectCalculator;
  
  const calculateProspects = (value, rate) => Math.floor(value * rate / 100);

  const data = {
    labels: ['Email', 'LinkedIn', 'WhatsApp', 'Phone SMS'],
    datasets: [
      {
        label: Data.heading1,
        data: [
          calculateProspects(emailProspects, 1.3),
          calculateProspects(linkedinProspects, 7),
          calculateProspects(whatsappProspects, 5),
          calculateProspects(smsProspects, 1)
        ],
        backgroundColor: '#e24545',
        borderWidth: 2
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'black',
        }
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Number of prospects: ${tooltipItem.raw}`,
        },
        backgroundColor: '#e24545',
        titleColor: '#fff',
        bodyColor: '#fff',
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          color: 'black'
        },
        grid: {
          color: '#ddd'
        }
      },
      y: {
        ticks: {
          color: '#black'
        },
        grid: {
          color: '#ddd'
        }
      }
    }
  };
  
  return (  
    <div className='mb-20'>
      <h2 className="font-bold font-chivo text-2xl md:text-3xl lg:text-4xl text-[#e24545] text-center mt-20 mb-20">{Data.heading}</h2>
      <div className="prospect-calculator p-4 md:p-6 lg:p-8">
        <div className="stats-container flex flex-col gap-4 pt-12">
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="emailProspects">{Data.email} {emailProspects}</label>
            <input
              id="emailProspects"
              type="range"
              min="10000"
              max="120000"
              value={emailProspects}
              onChange={(e) => setEmailProspects(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="linkedinProspects">{Data.linkedin} {linkedinProspects}</label>
            <input
              id="linkedinProspects"
              type="range"
              min="700"
              max="7000"
              value={linkedinProspects}
              onChange={(e) => setLinkedinProspects(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="whatsappProspects">{Data.whatsapp} {whatsappProspects}</label>
            <input
              id="whatsappProspects"
              type="range"
              min="2500"
              max="25000"
              value={whatsappProspects}
              onChange={(e) => setWhatsappProspects(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="input-group flex flex-col gap-2">
            <label htmlFor="smsProspects">{Data.phone} {smsProspects}</label>
            <input
              id="smsProspects"
              type="range"
              min="2500"
              max="10000"
              value={smsProspects}
              onChange={(e) => setSmsProspects(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        <div className="chart-container flex justify-center">
          <div className="w-full max-w-4xl" style={{ height: '400px' }}>
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </div> 
  );
};

export default ProspectCalculator;
