import React from 'react'

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Birmingham Plumbing Pro?
          </h2>
          <p className="text-xl opacity-90">
            Your trusted local plumbing experts
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-medal text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">✅ 10+ Years Experience</h3>
            <p className="opacity-90">
              Decade of expertise serving Birmingham homes and businesses with reliable plumbing solutions
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-shield-alt text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">✅ Licensed {"&"} Insured</h3>
            <p className="opacity-90">
              Fully qualified, licensed professionals with comprehensive insurance coverage for your peace of mind
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clock text-3xl"></i>
            </div>
            <h3 className="text-xl font-bold mb-4">✅ 24/7 Emergency Response</h3>
            <p className="opacity-90">
              Round-the-clock emergency service - {"we're"} here when you need us most, day or night
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
