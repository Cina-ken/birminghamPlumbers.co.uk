import React from 'react'

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
                <div>
                    <div className="flex items-center mb-4">
                        <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                            <i className="fas fa-wrench text-xl"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Birmingham Plumbing Pro</h3>
                            <p className="text-sm text-gray-400">Licensed & Insured</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mb-4">Your trusted local plumbing experts serving Birmingham with reliable, professional service since 2013.</p>
                    <div className="bg-yellow-100 px-3 py-2 rounded-full inline-block">
                        <span className="text-yellow-800 font-semibold text-sm">⭐ 4.9★ Google Rating</span>
                    </div>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#services" className="hover:text-white">Emergency Repairs</a></li>
                        <li><a href="#services" className="hover:text-white">Leak Detection</a></li>
                        <li><a href="#services" className="hover:text-white">Bathroom Installation</a></li>
                        <li><a href="#services" className="hover:text-white">Boiler Service</a></li>
                        <li><a href="#services" className="hover:text-white">Drain Cleaning</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#booking" className="hover:text-white">Book Appointment</a></li>
                        <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                        <li><a href="#contact" className="hover:text-white">Emergency Service</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Contact Info</h4>
                    <div className="space-y-3 text-gray-400">
                        <p><strong className="text-white">24/7 Emergency:</strong><br />0121 234 5678</p>
                        <p><strong className="text-white">Email:</strong><br />info@birminghamplumbingpro.co.uk</p>
                        <p><strong className="text-white">Service Area:</strong><br />Birmingham & West Midlands</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 Birmingham Plumbing Pro. All rights reserved. | Licensed & Insured | Gas Safe Registered</p>
                <p className="mt-2 text-sm">Professional plumbing services across Birmingham, Solihull, West Bromwich, and surrounding areas.</p>
            </div>
        </div>
    </footer>

  )
}
