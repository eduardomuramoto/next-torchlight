"use client"
import React, { useState } from "react";
import BlueButton from "../Buttons/blueButton";

// Define the shape of the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  message: string;
}

// Define the shape of the status message
interface StatusMessage {
  message: string;
  type: "success" | "error" | ""; // Possible types for the status message
}

export default function EnquirySection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState<StatusMessage>({
    message: "",
    type: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    e.stopPropagation();
    setStatusMessage({ message: "Sending Email...", type: "" }); // Reset message before submission

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      setStatusMessage({
        message: "Email sent successfully!",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        organization: "",
        message: "",
      }); // Clear form fields
    } catch (error) {
      console.error("Error sending email:", error);
      setStatusMessage({
        message: "Error sending email. Please try again later.",
        type: "error",
      });
    }
  };

  return (
    <section className="w-full bg-lightBackground flex gap-20 p-16 px-20">
      <div className="w-full">
        <h3 className="font-teko text-6xl uppercase font-semibold pb-6 text-background">Have a Question?</h3>
        <p className="font-teko text-6xl uppercase font-semibold pb-6 text-background">We are here to help.</p>
        <form onSubmit={handleSubmit} className="flex flex-wrap lg:flex-nowrap lg:gap-20 w-full">
          <div className="w-full lg:w-1/3">
            <div className="pb-2">
              <label className="text-background font-semibold" htmlFor="name">Your Name *</label>
              <input
                id="name"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label className="text-background font-semibold" htmlFor="email">Email *</label>
              <input
                id="email"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label className="text-background font-semibold" htmlFor="phone">Phone *</label>
              <input
                id="phone"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pb-2">
              <label className="text-background font-semibold" htmlFor="organization">Organization</label>
              <input
                id="organization"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3 h-full ">
            <div className="pb-6">
              <label className="text-background font-semibold" htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows={8}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-foreground focus:outline-none focus:ring"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <BlueButton className="ml-auto" label="Send Message" afterIcon="yes" isSubmit={true} />
          </div>
        </form>
        {/* Status Message */}
        {statusMessage.message && (
          <div className={`mt-4 text-lg ${statusMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {statusMessage.message}
          </div>
        )}
      </div>
    </section>
  );
}
