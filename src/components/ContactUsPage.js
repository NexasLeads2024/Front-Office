"use client"
import { useEffect } from 'react';
import { useParams } from "next/navigation";
import En from "../../messages/eng.json";
import Fr from "../../messages/fr.json";
const HubspotForm = () => {
  const { locale } = useParams();
  const data = locale === "fr" ? Fr.ContactUs : En.ContactUs;
  useEffect(() => {
    // Check if the form has already been initialized
    if (document.getElementById('hubspot-form-script')) return;

    const script = document.createElement('script');
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.id = 'hubspot-form-script'; // Add an id to track the script
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "eu1",
          portalId: "143456522",
          formId: "3ba1e919-9a55-4903-95a1-37569f6754d5",
          target: '#hubspot-form' // Explicitly target this div
        });
      }
    };
    document.body.appendChild(script);

    // Clean up the script if component is unmounted
    return () => {
      const existingScript = document.getElementById('hubspot-form-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className='bg-slate-400 bg-opacity-15 pt-5 pb-5'>
    <h1 className="text-4xl font-bold text-black capitalize text-center pb-5">
            {data.heading}
          </h1>
    <div 
      className='bg-white'
      id="hubspot-form" 
      style={{
        maxWidth: '700px',  // Set max width to make the form smaller
        margin: '0 auto',   // Center the form
        padding: '10px',    // Add some padding
        fontSize: '14px'    // Adjust font size to make it smaller
      }}
    ></div></div>
  );
};

export default HubspotForm;
