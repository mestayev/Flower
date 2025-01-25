import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "МИНИ КОМПОЗИЦИЯ С ЦВЕТАМИ НЕЖНО-РОЗОВАЯ",
    price: 4290,
    image: "public/img/a.png",
    description: "Нежная композиция из белых и розовых цветов"
  },
  {
    id: 2,
    name: "ДУЭТ ИЗ 11 РОЗОВЫХ И БЕЛЫХ ПИОНОВ",
    price: 4290,
    image: "public/img/b.png",
    description: "Элегантный букет из розовых и белых пионов"
  },
  {
    id: 3,
    name: "51 РОЗА АКВА",
    price: 4290,
    image: "public/img/c.png",
    description: "Роскошный букет из 51 розы сорта Аква"
  },
  {
    id: 4,
    name: "БУКЕТ ДНЯ БЕЗ ПОВОДА",
    price: 4290,
    image: "public/img/d.png",
    description: "Яркий букет в пурпурных тонах"
  }
]

export default function News() {
  const [favorites, setFavorites] = useState(new Set())
  const [currentSlide, setCurrentSlide] = useState(0)

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-medium text-gray-900">Популярное</h2>
          <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowUpRight className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.description}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label={favorites.has(product.id) ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.has(product.id)
                          ? "fill-red-500 text-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  <span className="absolute top-4 left-4 bg-[#FADEED] text-[#453C3C] text-xs px-2 py-1 rounded-full">
                    Top 
                  </span>  //NErobotayet//
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">
                      {product.price} ₽
                    </span>
                    <button className="px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                      Купить
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}



