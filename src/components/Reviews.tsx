import React from 'react'

export default function Reviews() {
  return (
    <section id='reviews' className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="bg-yellow-100 inline-block px-6 py-3 rounded-full mb-6">
            <span className="text-yellow-800 font-bold text-lg">
              ⭐⭐⭐⭐⭐ Rated 4.9★ on Google
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">
            {"Don't just take our word for it"}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6">
              {
                "Absolutely brilliant service! Had a burst pipe at 2am and they were here within 30 minutes. Professional, clean work and fair pricing. Highly recommended!"
              }
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                SM
              </div>
              <div>
                <h4 className="font-semibold">Sarah Mitchell</h4>
                <p className="text-gray-600 text-sm">Verified Google Review</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6">
              {
                "Fantastic job on our bathroom renovation. Completed on time, within budget, and the quality is outstanding. The team was courteous and cleaned up perfectly."
              }
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                JD
              </div>
              <div>
                <h4 className="font-semibold">James Davies</h4>
                <p className="text-gray-600 text-sm">Verified Google Review</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="text-yellow-500 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
            <p className="text-gray-700 mb-6">
              {
                "Best plumber in Birmingham! Fixed our boiler issue quickly and explained everything clearly. Fair pricing and excellent customer service. Will definitely use again."
              }
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                LT
              </div>
              <div>
                <h4 className="font-semibold">Lisa Thompson</h4>
                <p className="text-gray-600 text-sm">Verified Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
