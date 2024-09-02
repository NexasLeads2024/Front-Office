import React from 'react';
import Head from "next/head";
import Navbar from '@/components/Navbar';
import BlogPage from "@/components/BlogPage";
import Footer from '@/components/Footer';

export const metadata = {
  title: "NexasLeads - Blog",
  description: "Discover how our data-driven, customer-centric team at NexasLeads powers B2B growth with innovative lead generation and strategic sales solutions. Partner with us for success.",
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
      <BlogPage />
      <Footer />
    </div>
  );
};
export default BusinessDevelopment;
