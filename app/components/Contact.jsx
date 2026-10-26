"use client";
import React, { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    const formData = new FormData(e.target);
    // Ekhane apnar Web3Forms theke pawa Access Key ti boshie din:
    formData.append("access_key", "6093fb16-9450-476c-a214-c40f16c8bf44");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        setStatusMessage("Message sent successfully! I will get back to you soon.");
        e.target.reset(); // Form clear kore dibe
      } else {
        setIsSuccess(false);
        setStatusMessage("Something went wrong! Please try again later.");
      }
    } catch (error) {
      setIsSuccess(false);
      setStatusMessage("Failed to send message. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d1322] border-t border-gray-900 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Contact <span className="text-amber-400">Information</span>
        </h2>
        <p className="text-center text-gray-400 text-sm max-w-lg mx-auto mb-12">
          Feel free to reach out directly via email, phone, or WhatsApp for any projects or inquiries.
        </p>

        {/* Direct Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a
            href="mailto:ahbabarabi038@gmail.com"
            className="p-5 bg-[#0B0F19] border border-gray-800 rounded-xl text-center hover:border-amber-400/50 transition block"
          >
            <span className="text-xs text-gray-500 font-semibold uppercase">Email</span>
            <p className="text-sm font-medium text-amber-400 mt-1 truncate">ahbabarabi038@gmail.com</p>
          </a>

          <a
            href="tel:+880 1789-501574"
            className="p-5 bg-[#0B0F19] border border-gray-800 rounded-xl text-center hover:border-amber-400/50 transition block"
          >
            <span className="text-xs text-gray-500 font-semibold uppercase">Phone</span>
            <p className="text-sm font-medium text-amber-400 mt-1">+880 1789-501574</p>
          </a>

          <a
            href="https://wa.me/8801700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 bg-[#0B0F19] border border-gray-800 rounded-xl text-center hover:border-amber-400/50 transition block"
          >
            <span className="text-xs text-gray-500 font-semibold uppercase">WhatsApp</span>
            <p className="text-sm font-medium text-amber-400 mt-1">Chat on WhatsApp</p>
          </a>
        </div>

        {/* Message Form */}
        <div className="bg-[#0B0F19] border border-gray-800 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2.5 bg-[#0d1322] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="name@example.com"
                className="w-full px-4 py-2.5 bg-[#0d1322] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your message..."
                className="w-full px-4 py-2.5 bg-[#0d1322] border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-amber-400 resize-none"
              ></textarea>
            </div>

            {statusMessage && (
              <p className={`text-xs font-medium text-center ${isSuccess ? "text-green-400" : "text-red-400"}`}>
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 bg-amber-400 hover:bg-amber-300 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold rounded-lg text-sm transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}