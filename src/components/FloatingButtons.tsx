import React from 'react'

export default function FloatingButtons() {
  return (
     <div className="floating-buttons">
        <a href="tel:+441212345678" className="floating-btn bg-red-600 hover:bg-red-700" title="Call Now">
            <i className="fas fa-phone"></i>
        </a>
        <a href="https://wa.me/441212345678" className="floating-btn bg-green-600 hover:bg-green-700" title="WhatsApp">
            <i className="fab fa-whatsapp"></i>
        </a>
        <a href="#booking" className="floating-btn bg-blue-600 hover:bg-blue-700" title="Book Appointment">
            <i className="fas fa-calendar"></i>
        </a>
    </div>
  )
}
