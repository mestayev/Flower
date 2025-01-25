import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем navigate для перехода
import { ArrowUpRight } from 'lucide-react';

export default function Categories() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние загрузки

  // Загружаем продукты с бэкенда
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Сохраняем продукты в состоянии
        setLoading(false); // Завершаем загрузку
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Завершаем загрузку при ошибке
      });
  }, []);  // Пустой массив, чтобы запрос был выполнен только один раз при монтировании компонента

  // Группируем товары по категориям (обновляем с учетом возможных нескольких категорий)
  const uniqueCategories = [...new Set(products.map(product => product.category))];

  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // При клике на категорию, перенаправляем на страницу с фильтрацией товаров по этой категории
    navigate(`/catalog/${category}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Категории товаров</h1>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          {/* Индикатор загрузки */}
          <div className="w-16 h-16 border-4 border-t-4 border-[#85CA40] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {uniqueCategories.length > 0 ? (
            uniqueCategories.map((categoryName, index) => {
              const category = products.find((product) => product.category === categoryName);
              return (
                <div key={index}>
                  <a
                    href=""
                    onClick={() => handleCategoryClick(categoryName)} // При клике выбираем категорию
                    className="group relative bg-gray-50 rounded-2xl overflow-hidden aspect-square transition-transform hover:-translate-y-1"
                  >
                    <img
                      src={category?.thumbnail || "/placeholder.svg"}
                      alt={categoryName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                      <h3 className="text-lg font-medium text-white">{categoryName}</h3>
                      <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-gray-900" />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">Нет категорий для отображения.</p>
          )}
        </div>
      )}
    </div>
  );
}
