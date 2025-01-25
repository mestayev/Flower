import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Импортируем useParams для получения параметра категории и useNavigate для навигации
import { ArrowUpRight } from 'lucide-react';

export default function Catalog() {
  const { category } = useParams(); // Получаем категорию из URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Состояние для загрузки
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // Загружаем все товары
        setLoading(false); // Завершаем загрузку
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Завершаем загрузку при ошибке
      });
  }, []); // Загружаем товары один раз при монтировании компонента

  // Фильтруем товары по выбранной категории
  const filteredProducts = category === 'Все'
    ? products
    : products.filter((product) => product.category === category);

  // Функция для обработки клика по товару
  const handleProductClick = (productId) => {
    navigate(`/gul1/${productId}`); // Перенаправляем на страницу товара
  };

  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Каталог товаров: {category}
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-screen ml-[]5">
          {/* Анимация загрузки с вращающимся индикатором */}
          <div className="w-16 h-16 border-4 border-t-4 border-[#85CA40] rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-50 rounded-2xl overflow-hidden aspect-square transition-transform hover:-translate-y-1 cursor-pointer"
              onClick={() => handleProductClick(product.id)} // Обработчик клика
            >
              <img
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                <h3 className="text-lg font-medium text-white">
                  {product.title}
                </h3>
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-gray-900" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
