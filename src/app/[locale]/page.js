import React from 'react';
import StatsCards from '@/components/StatsCards';
import WhyUs from '@/components/WhyUs';
import ProspectCalculator from '@/components/ProspectCalculator';
import Navbar from '@/components/Navbar';
import Partners from '@/components/Partners';
import Head from "next/head";
import Hero from '@/components/Hero';
import OurServises from '@/components/OurServises';
import Footer from '@/components/Footer';
import AboutUs from '@/components/AboutUs';
import Partners1 from '@/components/Partners1';
import Reviews from '@/components/Reviews';
import ContactUsPage from '@/components/ContactUsPage';
import YouTubeVideo from '@/components/YouTubeVideo';
import Section from '@/components/Section';
import FAQ from '@/components/FAQ';

export const metadata = {
  title: "NexasLeads",
  description: "Demand Generation for B2B companies, Outbound Marketing campaigns , Lead Generation and appointment setting to Generate You Meetings And Clients.",
  keywords: "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons:{
    icon:['/favicon.ico?v=1'],
  },
  robots: {
    index: true,
    follow: true,
  }
};
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <Hero />
      <Partners1 />
      <AboutUs />
      <YouTubeVideo />  
      <Section /> 
      <StatsCards />
      <OurServises />
      <ProspectCalculator />
      <Partners />
      <WhyUs />
      <Reviews />
      <ContactUsPage />
      <FAQ />
      <Footer />
    </div>
  );
};

export default HomePage;
