"use client";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sujet, setSujet] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_wnema2c";
    const templateId = "template_6mx7och";

    try {
      const emailData = {
        name: name,
        email: email,
        message: message,
        sujet: sujet,
      };

      const response = await emailjs.send(
        serviceId,
        templateId,
        emailData,
        "JPVC2pgKwHmxjZV6K"
      );

      console.log("Email sent successfully!", response);
      setStatusMessage("Votre message a été envoyé avec succès!");
      setName("");
      setEmail("");
      setMessage("");
      setSujet("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <section className="body-font relative bg-[#e24545] text-white">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-5 text-5xl font-medium text-white sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto text-3xl leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback,
            or a collaboration proposal, we'd love to hear from you.
          </p>
        </div>

        <div className="mx-auto w-full md:w-4/5 lg:w-3/5">
          <div className="flex flex-col gap-4">
            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full">
              <div className="relative mb-4">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="input1"
                  >
                    Name
                  </label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder="Enter your name"
                    type="text"
                    id="input1"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="input2"
                  >
                    Email
                  </label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder="Enter your email"
                    type="email"
                    id="input2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="input3"
                  >
                    Subject
                  </label>
                  <input
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 text-black"
                    placeholder="Enter the subject"
                    type="text"
                    id="input3"
                    value={sujet}
                    onChange={(e) => setSujet(e.target.value)}
                  />
                </div>
              </div>

              <div className="relative mb-4">
                <div className="w-full p-5 bg-white rounded-lg font-mono">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="text-sm custom-input w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm transition duration-300 ease-in-out transform focus:-translate-y-1 focus:border-[#e24545] hover:shadow-lg hover:border-[#e24545] bg-gray-100 resize-none text-black"
                    placeholder="Your message here"
                    style={{ height: "150px" }}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className="w-full flex justify-center pt-5">
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-gray-950 capitalize transition-colors duration-300 transform bg-[#ffd126] rounded-md hover:bg-[#f8c600]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
