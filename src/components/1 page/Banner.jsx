export default function Banner () {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="relative bg-[#FFE6EA] rounded-3xl overflow-hidden">
          <div className="container mx-auto px-8 py-12 flex justify-between items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
                ПОДПИСКА НА ЦВЕТЫ
              </h2>
              <p className="text-gray-700 mb-6 max-w-md">
                Подписка на цветы – это услуга для тех, кто доверят нашему вкусу
                и хочет каждое утро любоваться красивым сезонным букетом
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-semibold text-gray-800">от</span>
                  <span className="text-3xl font-bold text-gray-800">1500</span>
                  <span className="text-xl font-semibold text-gray-800">₽</span>
                </div>
                <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors">
                  Оформить подписку
                </button>
              </div>
            </div>
  
            {/* Right Images */}
            <div className="absolute ml-[400px] top-0 h-full w-1/2 flex items-center justify-end">
              <img
                src="public/img/img 2.png"
                alt="Flower subscription"
                className="h-full object-contain object-right"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

  
  