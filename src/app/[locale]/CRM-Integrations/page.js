import React from 'react';
import Head from "next/head";
import Navbar from '@/components/Navbar';
import CRMIntegrationsPage from '@/components/CRMIntegrationsPage';
import Footer from '@/components/Footer';

export const metadata = {
  title: "NexasLeads - CRM Integrations",
  description: "Boost customer relationships with seamless HubSpot CRM integration. Centralize data, enhance team productivity, and future-proof your growth.",
  keywords: "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons: {
    icon: ['/favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
const CRMIntegrations = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <CRMIntegrationsPage />
      <Footer />
    </div>
  );
};
export default CRMIntegrations;
