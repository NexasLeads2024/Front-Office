import React from 'react';
import Head from "next/head";
import Navbar from '@/components/Navbar';
import BusinessDevelopmentPage from '@/components/BusinessDevelopmentPage';
import Footer from '@/components/Footer';

export const metadata = {
  title: "NexasLeads - Business Development",
  description: "Connect with ideal clients using proven outbound strategies. Tailored business development solutions for sustained growth.",
  keywords: "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons: {
    icon: ['/favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
const BusinessDevelopment = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <BusinessDevelopmentPage />
      <Footer />
    </div>
  );
};
export default BusinessDevelopment;
