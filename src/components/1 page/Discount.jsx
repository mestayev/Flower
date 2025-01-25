import { useState } from 'react'
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  {
    id: 1,
    name: "КРЕМОВЫЙ БУКЕТ ПИОНОВИДНЫХ РОЗ",
    price: 4290,
    image: "public/img/a.png",
    isNew: false,
    discount: 15,
    originalPrice: 5890
  },
  {
    id: 2,
    name: "15 КУСТОВЫХ РОЗ РЕФЛЕКС",
    price: 4290,
    image: "public/img/b.png",
    isNew: false,
    discount: 45,
    originalPrice: 5890
  },
  {
    id: 3,
    name: "БУКЕТ ПИОНОВИДНЫХ РОЗ ЛАВАНДОВЫЕ",
    price: 4290,
    image: "public/img/c.png",
    isNew: false,
    discount: 25,
    originalPrice: 5890
  },
  {
    id: 4,
    name: "ПИОНОВИДНАЯ РОЗА ДЖУЛЬЕТТА",
    price: 4290,
    image: "public/img/d.png",
    isNew: false,
    discount: 18,
    originalPrice: 5890
  }
]
export default function Discount ()  {
  const [favorites, setFavorites] = useState(new Set())

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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-800">
        Акции
        </h2>
        <button className="text-gray-600 hover:text-gray-800 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center z-10 hover:bg-gray-50 transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              {/* Product Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      favorites.has(product.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }`}
                  />
                </button>
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    -{product.discount}%
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-800 group-hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-semibold">{product.price} ₽</span>
                  {product.discount && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice} ₽
                    </span>
                  )}
                </div>
                <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors">
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


