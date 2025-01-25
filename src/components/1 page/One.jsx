import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: "Cash back 10%",
    subtitle: "с каждой покупкой",
    description: "При регистрации на сайте",
    buttonText: "Регистрация",
    image: "/public/img/aba.png"
  },
  {
    id: 2,
    title: "Cash back 10%",
    subtitle: "с каждой покупкой",
    description: "При регистрации на сайте",
    buttonText: "Регистрация",
    image: "/public/img/aba.png"
  },
  {
    id: 1,
    title: "Cash back 10%",
    subtitle: "с каждой покупкой",
    description: "При регистрации на сайте",
    buttonText: "Регистрация",
    image: "/public/img/aba.png"
  },
  {
    id: 1,
    title: "Cash back 10%",
    subtitle: "с каждой покупкой",
    description: "При регистрации на сайте",
    buttonText: "Регистрация",
    image: "/public/img/aba.png"
  },
  // Add more slides as needed
]

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-[#EEF1F9] h-[500px] ">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative min-h-[300px] md:min-h-[400px] ml-[450px] left-[-150px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center h-full py-12">
                {/* Text Content */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                      {slide.title}
                    </h2>
                    <p className="text-3xl md:text-4xl text-gray-800">
                      {slide.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600">{slide.description}</p>
                  <button className="bg-white px-6 py-2 rounded-full text-gray-800 hover:bg-gray-50 transition-colors">
                    {slide.buttonText}
                  </button>
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt="Promotional offer"
                    className="w-full h-auto object-contain"
                  />
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-yellow-400 rounded-full opacity-20" />
                    <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-yellow-400 rounded-full opacity-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-6 bg-gray-800'
                : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default PromoSlider

