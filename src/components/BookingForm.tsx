"use client";

import { useState, FormEvent, useEffect } from "react";
import { FormData } from "@/types";
import {
  sendBookingEmail,
  sendConfirmationEmail,
  initEmailJS,
} from "../../lib/emailjs";

export default function BookingForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setErrorMessage("");

    // Prepare template parameters for EmailJS
    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      date: formData.date,
      time: formData.time,
      message: formData.message,
    };

    try {
      // Send booking email to admin
      const result = await sendBookingEmail(emailParams);

      if (result.success) {
        // FIXED: Send confirmation email to customer with booking details
        const bookingDetails = {
          service: formData.service,
          date: formData.date,
          time: formData.time,
          phone: formData.phone,
          message: formData.message,
        };

        const confirmationResult = await sendConfirmationEmail(
          formData.email, 
          formData.name, 
          bookingDetails  // 🔧 ADDED: Pass booking details to populate template
        );

        if (confirmationResult.success) {
          setShowSuccess(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            date: "",
            time: "",
            message: "",
          });
        } else {
          // Booking sent but confirmation failed - still show success but log the error
          console.error("Confirmation email failed:", confirmationResult.error);
          setShowSuccess(true);
          setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            date: "",
            time: "",
            message: "",
          });
          // Optionally show a warning that booking was received but confirmation email failed
        }
      } else {
        setError(true);
        setErrorMessage(result.error || "Failed to send booking request");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
      setErrorMessage("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-xl opacity-90">
            {
              "Get your plumbing sorted - we'll email you confirmation instantly"
            }
          </p>
        </div>
        <div className="bg-white rounded-xl p-8 text-gray-800">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            {/* Form fields */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Service Needed *
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select a service</option>
                <option value="Emergency Repair">Emergency Repair</option>
                <option value="Leak Detection">Leak Detection</option>
                <option value="Bathroom Installation">
                  Bathroom Installation
                </option>
                <option value="Kitchen Plumbing">Kitchen Plumbing</option>
                <option value="Boiler Service">Boiler Service</option>
                <option value="Drain Cleaning">Drain Cleaning</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Preferred Time *
              </label>
              <select
                id="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
              >
                <option value="">Select time</option>
                <option value="8:00 AM - 10:00 AM">8:00 AM - 10:00 AM</option>
                <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM</option>
                <option value="Emergency - ASAP">Emergency - ASAP</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                Describe the Issue
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Please describe your plumbing issue in detail..."
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "📅 Book My Appointment"
                )}
              </button>
            </div>
          </form>

          {/* Success message with fade-out effect */}
          {showSuccess && (
            <div
              id="successMessage"
              className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg transition-opacity duration-300"
            >
              <p className="text-green-800 font-semibold">
                {
                  "✅ Booking submitted successfully! We'll contact you within 15 minutes to confirm."
                }
              </p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <p className="text-red-800 font-semibold">
                ❌{" "}
                {errorMessage ||
                  "Failed to submit booking. Please try again or call us directly."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}