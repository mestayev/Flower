import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import axios from 'axios';

export default function Catalog() {
    const [minPrice, setMinPrice] = useState(1); // Нижний предел цены
    const [maxPrice, setMaxPrice] = useState(8000); // Верхний предел цены
    const [products, setProducts] = useState([]); // Все продукты
    const [filteredProducts, setFilteredProducts] = useState([]); // Отфильтрованные продукты
    const [loading, setLoading] = useState(true); // Состояние для загрузки
    const navigate = useNavigate();

    // Получение данных с API
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products') // Пример API, замените на свой
            .then((response) => {
                setProducts(response.data.products); // Сохраняем продукты
                setFilteredProducts(response.data.products); // Изначально показываем все продукты
                setLoading(false); // Завершаем загрузку
            })
            .catch((error) => {
                console.error('Ошибка загрузки данных:', error);
                setLoading(false); // Завершаем загрузку при ошибке
            });
    }, []);

    // Фильтрация продуктов по диапазону цен
    const handleApplyFilter = () => {
        const filtered = products.filter(
            (product) => product.price >= minPrice && product.price <= maxPrice
        );
        setFilteredProducts(filtered);
    };

    const handleButtonClick = (productId) => {
        navigate(`/gul1/${productId}`); // Переход на страницу товара Gul1
    };

    const handleReset = () => {
        setMinPrice(1); // Сброс минимальной цены
        setMaxPrice(8000); // Сброс максимальной цены
        setFilteredProducts(products); // Показываем все продукты
    };

    const handleFavorite = () => {
        navigate('/favorites');
    };

    return (
        <div>
            <div>
                <h1 className="w-[406px] h-[48px] font-semibold text-[48px] leading-[48px] text-[#453C3C] ml-[150px] mt-[25px]">
                    Каталог товаров
                </h1>
                <div className="bg-[#F0F0F1] w-[1360px] h-[104px] rounded-[24px] flex mt-[50px] items-center ml-[140px]">
                    <h1 className="text-[#453C3C] text-[22px] leading-[22px] ml-[30px]">Цена</h1>
                    <div className="flex items-center ml-[50px]">
                        <div className="flex flex-col mr-[20px]">
                            <label className="text-[#453C3C] text-[18px] font-medium">Минимальная</label>
                            <input
                                type="range"
                                min="1"
                                max="300"
                                value={minPrice}
                                onChange={(e) => setMinPrice(Number(e.target.value))}
                                className="w-[250px] h-[4px] bg-[#D9D9D9] rounded-full appearance-none outline-none"
                            />
                            <span className="ml-[10px] text-[#453C3C] text-[18px] font-medium">{minPrice} $</span>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-[#453C3C] text-[18px] font-medium">Максимальная</label>
                            <input
                                type="range"
                                min="1"
                                max="300"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                                className="w-[250px] h-[4px] bg-[#D9D9D9] rounded-full appearance-none outline-none"
                            />
                            <span className="ml-[10px] text-[#453C3C] text-[18px] font-medium">{maxPrice} $</span>
                        </div>
                    </div>
                    <div className="gap-4 flex ml-[auto] mr-[30px]">
                        <button
                            className="bg-[#85CA40] w-[155px] h-[54px] rounded-[24px] text-[#FFFFFF] text-[18px] font-medium"
                            onClick={handleApplyFilter} // Применить фильтрацию
                        >
                            Применить
                        </button>
                        <button
                            className="bg-[#FFFFFF] w-[155px] h-[54px] rounded-[27px] text-[#453C3C] text-[18px] font-medium"
                            onClick={handleReset} // Сбросить фильтры
                        >
                            Сбросить
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        {/* Индикатор загрузки */}
                        <div className="w-16 h-16 border-4 border-t-4 border-[#85CA40] rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="p-4 grid grid-cols-4 gap-6">
                                {filteredProducts.map((product) => (
                                    <div key={product.id} className="p-6 rounded-lg">
                                        <img
                                            className="!w-[325px] !h-[325px] !rounded-3xl"
                                            src={product.thumbnail || '/placeholder.svg'}
                                            alt={product.title}
                                        />
                                        <h2 className="text-[18px] w-[325px] h-[40px] font-semibold leading-[19.8px] text-[#453C3C]">
                                            {product.title}
                                        </h2>
                                        <div className="flex items-center">
                                            <p className="text-[#453C3C] text-[18px] leading-[18px] font-medium w-[65px] h-[18px]">
                                                {product.price} $
                                            </p>
                                            <button
                                                onClick={() => handleButtonClick(product.id)}
                                                className="w-[155px] h-[54px] bg-[#85CA40] rounded-[27px] font-medium text-[#FFFFFF] text-[15px] leading-[18px]"
                                            >
                                                Купить
                                            </button>
                                            <div onClick={handleFavorite} className="ml-[15px] text-[25px] cursor-pointer">
                                                <FaRegHeart />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
