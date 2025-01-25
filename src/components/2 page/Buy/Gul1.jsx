import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import axios from "axios";

export default function Gul1() {
  const { productId } = useParams(); // Получаем ID продукта из URL
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // Состояние для сообщения об ошибке
  const [loading, setLoading] = useState(); // Добавляем состояние для загрузки
  const navigate = useNavigate(); // Хук для навигации

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        // Задержка перед загрузкой для красивого эффекта

        // Загружаем информацию о товаре по его ID
        const productResponse = await axios.get(`https://dummyjson.com/products/${productId}`);
        setProduct(productResponse.data);
        setQuantity(Math.min(productResponse.data.stock, quantity));

        // Загружаем отзывы для товара
        const reviewsResponse = await axios.get(`https://dummyjson.com/products/${productId}`);
        setReviews(reviewsResponse.data.reviews);

        // Останавливаем индикатор загрузки
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  }, [productId]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReviewData = {
      productId,
      review: newReview,
      rating,
    };

    axios
      .post("https://dummyjson.com/reviews", newReviewData)
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview("");
        setRating(0);
      })
      .catch((error) => {
        console.error("Ошибка при отправке отзыва:", error);
      });
  };

  const handleBuyClick = () => {
    const cartData = {
      product,
      quantity,
    };

    // Проверка на доступное количество в наличии
    if (quantity > product.stock) {
      setErrorMessage(`Извините, на складе осталось только ${product.stock} штук.`); // Показываем сообщение об ошибке
      setQuantity(product.stock); // Ограничиваем покупку количеством на складе
      return;
    }

    setErrorMessage(""); // Очищаем сообщение об ошибке, если количество в пределах нормы
    localStorage.setItem('cartData', JSON.stringify(cartData));
    navigate("/register", { state: { product, quantity } });
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > product.stock) {
      setErrorMessage(`Максимальное количество товара — ${product.stock}.`);
      setQuantity(product.stock);
    } else {
      setErrorMessage(""); // Очищаем ошибку при правильном значении
      setQuantity(newQuantity);
    }
  };

  // Устанавливаем максимальное количество товара
  const handleMaxQuantity = () => {
    setQuantity(product.stock);
    setErrorMessage(""); // Очищаем сообщение об ошибке при установке максимального количества
  };

  // Обработчик для кнопки +
  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    if (newQuantity <= product.stock) {
      setQuantity(newQuantity);
      setErrorMessage(""); // Сбрасываем сообщение об ошибке, если количество в пределах допустимого
    } else {
      setErrorMessage(`Максимальное количество товара — ${product.stock}.`);
      setQuantity(product.stock); // Устанавливаем максимальное количество товара
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {/* Анимация загрузки с вращающимся индикатором */}
        <div className="w-16 h-16 border-4 border-t-4 border-[#85CA40] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return <div>Ошибка загрузки товара...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="aspect-square overflow-hidden rounded-lg mb-4">
            <img
              src={product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md"
            >
              <Heart
                className={`w-6 h-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"}`}
              />
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>

          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-2xl font-bold text-green-500">
              {(product.price * quantity).toFixed(2)} $
            </span>
            <span className="text-lg text-gray-500 ">{product.stock} Штук в продаже</span>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm mb-4">
              {errorMessage}
            </div>
          )}

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Количество</label>
              <div className="flex items-center w-32 border rounded-md">
                <button
                  onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:text-gray-700"
                >
                  -
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Math.min(product.stock, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full text-center border-x px-3 py-2"
                />
                <button
                  onClick={handleIncreaseQuantity} // Исправлено для увеличения с ограничением
                  className="px-3 py-2 text-gray-600 hover:text-gray-700"
                >
                  +
                </button>
              </div>
            </div>

            {/* Кнопка "Макс", устанавливающая максимальное количество */}
            <button
              onClick={handleMaxQuantity}
              className="w-full bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-colors"
            >
              Макс
            </button>

            <button
              onClick={handleBuyClick} // Передаем данные товара и количества в Register
              className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors"
            >
              Купить
            </button>
          </div>

          <div>
            <h2 className="font-semibold mb-2">Описание</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Отзывы</h2>
        </div>

        {/* Review List */}
        <div>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">{review.comment}</p>
                <div className="flex items-center gap-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500">{review.reviewerName} - {new Date(review.date).toLocaleDateString()}</p>
                <p className="text-xs text-gray-400">{review.reviewerEmail}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">Отзывов пока нет. Попробуйте позже.</p>
          )}
        </div>

        {/* Review Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Оставить отзыв</h3>
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Ваше имя <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Имя"
              />
            </div>

            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                Ваш отзыв <span className="text-red-500">*</span>
              </label>
              <textarea
                id="review"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                required
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Оставьте ваш отзыв"
              ></textarea>
            </div>

            <div className="flex gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Оценка</label>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      onClick={() => setRating(index + 1)}
                      className={`w-6 h-6 cursor-pointer ${rating > index ? "text-yellow-400" : "text-gray-400"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
            >
              Отправить отзыв
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
