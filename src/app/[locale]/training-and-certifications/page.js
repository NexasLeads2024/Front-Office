import React from 'react';
import Head from "next/head";
import Navbar from '@/components/Navbar';
import TrainingAndCertificationsPage from '@/components/TrainingAndCertificationsPage';
import Footer from '@/components/Footer';

export const metadata = {
  title: "NexasLeads - Training & Certifications",
  description: "Master business development with expert training. Boost your team's sales skills and close more deals with proven techniques.",
  keywords: "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons: {
    icon: ['/favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
const TrainingAndCertifications = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <TrainingAndCertificationsPage />
      <Footer />
    </div>
  );
};
export default TrainingAndCertifications;
