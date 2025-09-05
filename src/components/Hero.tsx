export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Trusted Plumber in Birmingham<br />
          <span className="text-blue-400">24/7 Emergency Service</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Fast response. Fair prices. Satisfaction guaranteed.<br />
          Over 10 years serving Birmingham with reliable plumbing solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+441212345678" className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            📞 Call Now - 0121 234 5678
          </a>
          <a href="#booking" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            📅 Book Appointment
          </a>
          <a href="https://wa.me/441212345678" className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
            💬 WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}