import React from "react";
import StatsCards from "@/components/StatsCards";
import WhyUs from "@/components/WhyUs";
import ProspectCalculator from "@/components/ProspectCalculator";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Head from "next/head";
import Hero from "@/components/Hero";
import OurServises from "@/components/OurServises";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import AboutUsCopy from "@/components/AboutUsCopy";
import Partners1 from "@/components/Partners1";
import Reviews from "@/components/Reviews";
import ContactUsPage from "@/components/ContactUsPage";
import YouTubeVideo from "@/components/YouTubeVideo";
import Section from "@/components/Section";
import FAQ from "@/components/FAQ";
import StateCards2 from "@/components/StatsCards2";
import StateCards3 from "@/components/StateCards3";

export const metadata = {
  title: "NexasLeads",
  description:
    "Demand Generation for B2B companies, Outbound Marketing campaigns , Lead Generation and appointment setting to Generate You Meetings And Clients.",
  keywords:
    "email marketing, go to market, growth hacking, demand generation, B2B Growth, lead generation, appointment setting, LinkedIn marketing, WhatsApp marketing, SMS marketing",
  icons: {
    icon: ["/favicon.ico?v=1"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <div className="-mt-[19rem] sm:-mt-24 md:-mt-20 xl:-mt-28 2xl:-mt-36 py-2">
        <Partners1 />
      </div>
      <OurServises />
      <AboutUsCopy />
      <StateCards3 />
      <WhyUs />
      {/* <AboutUs /> */}
      {/* <YouTubeVideo /> */}
      {/* <StatsCards /> */}
      {/* <StateCards2 /> */}
      <ProspectCalculator />
      <Reviews />
      <Section />
      <Partners />
      <FAQ />
      <ContactUsPage />
      <Footer />
    </div>
  );
};

export default HomePage;
