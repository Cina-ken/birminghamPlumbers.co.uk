import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <i className="fas fa-phone text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">24/7 Emergency Line</h3>
                  <a
                    href="tel:+441212345678"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    0121 234 5678
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-green-600 p-3 rounded-lg mr-4">
                  <i className="fab fa-whatsapp text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">WhatsApp</h3>
                  <a
                    href="https://wa.me/441212345678"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Message Us Instantly
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-red-600 p-3 rounded-lg mr-4">
                  <i className="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:info@birminghamplumbingpro.co.uk"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    info@birminghamplumbingpro.co.uk
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-600 p-3 rounded-lg mr-4">
                  <i className="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold">Service Area</h3>
                  <p className="text-gray-300">
                    Birmingham &amp; Surrounding Areas
                    <br />
                    West Midlands, England
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-gray-700 p-1 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155418.4628810051!2d-2.064176226562505!3d52.48142097963275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870942d1b417173%3A0xca81fef0aeee7998!2sBirmingham%2C%20UK!5e0!3m2!1sen!2sus!4v1699123456789!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
