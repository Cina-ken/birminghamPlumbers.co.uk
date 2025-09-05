export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
              <i className="fas fa-wrench text-xl"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Birmingham Plumbing Pro</h1>
              <p className="text-sm text-gray-600">Licensed & Insured</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <div className="bg-yellow-100 px-3 py-1 rounded-full">
              <span className="text-yellow-800 font-semibold">⭐ 4.9★ Google Rating</span>
            </div>
            <a href="tel:+441212345678" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
              📞 Call Now: 0121 234 5678
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}