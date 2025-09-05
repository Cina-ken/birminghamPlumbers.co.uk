export default function Services() {
  const services = [
    { icon: '🚨', color: 'text-red-600', title: 'Emergency Repairs', description: '24/7 emergency callout service for burst pipes, leaks, and urgent repairs', linkText: 'Call Now →', href: 'tel:+441212345678' },
    { icon: '🔍', color: 'text-blue-600', title: 'Leak Detection', description: 'Advanced leak detection technology to find hidden leaks fast', linkText: 'Book Service →', href: '#booking' },
    { icon: '🛁', color: 'text-green-600', title: 'Bathroom & Kitchen', description: 'Complete bathroom and kitchen plumbing installations and upgrades', linkText: 'Get Quote →', href: '#booking' },
    { icon: '🔥', color: 'text-orange-600', title: 'Boiler Installation', description: 'Professional boiler installation, repair, and annual servicing', linkText: 'Book Service →', href: '#booking' },
    { icon: '🚰', color: 'text-purple-600', title: 'Drain Cleaning', description: 'Professional drain unblocking and cleaning services', linkText: 'Call Now →', href: 'tel:+441212345678' },
    { icon: '⚡', color: 'text-teal-600', title: 'Power Flushing', description: 'Improve heating efficiency with professional power flushing', linkText: 'Book Service →', href: '#booking' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600">Expert plumbing solutions for every need</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className={`${service.color} text-4xl mb-4`}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.href} className="text-blue-600 font-semibold hover:text-blue-800">{service.linkText}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}