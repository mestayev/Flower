export default function Info () {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
          Какие бывают стадии зрелости бутона розы в Эквадоре
        </h1>
  
        <div className="bg-[#f5f3f0] rounded-2xl p-6 md:p-8 mb-6">
          <img
            src="/public/img/Rose.png"
            alt="Стадии зрелости бутона розы в Эквадоре"
            className="w-full rounded-xl"
          />
        </div>
  
        <div className="flex justify-center">
          <button className="bg-[#85CA40] text-white px-6 py-3 rounded-full hover:bg-[#76b439] transition-colors">
            Войти в кабинет партнера
          </button>
        </div>
      </div>
    )
  }
  

  