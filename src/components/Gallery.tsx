import React from 'react'
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work Gallery</h2>
                <p className="text-xl text-gray-600">See the quality craftsmanship that sets us apart</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Bathroom Installation" className="gallery-img w-full h-64 object-cover" width={500} height={256} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                        <h4 className="font-semibold">Complete Bathroom Install</h4>
                        <p className="text-sm opacity-90">Modern luxury bathroom</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                     src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Boiler Installation" className="gallery-img w-full h-64 object-cover" width={500} height={256} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                        <h4 className="font-semibold">Boiler Installation</h4>
                        <p className="text-sm opacity-90">Efficient heating solution</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Kitchen Plumbing" className="gallery-img w-full h-64 object-cover" width={500} height={256} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                        <h4 className="font-semibold">Kitchen Plumbing</h4>
                        <p className="text-sm opacity-90">Professional pipe work</p>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Emergency Repair" className="gallery-img w-full h-64 object-cover" width={500} height={256} />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                        <h4 className="font-semibold">Emergency Repair</h4>
                        <p className="text-sm opacity-90">Fast leak detection</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}
