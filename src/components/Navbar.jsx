import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  User,
  ChevronDown,
  Snowflake,
} from "lucide-react";
import React from "react";

export default function Navbar() {
  const [cartCount] = useState(1);
  const [isCityMenuOpen, setIsCityMenuOpen] = useState(false);
  const [showCityMenu, setShowCityMenu] = useState(false);

  const toggleCityMenu = () => {
    setIsCityMenuOpen(!isCityMenuOpen); // Управление состоянием видимости
    if (!isCityMenuOpen) {
      setTimeout(() => {
        setShowCityMenu(true); // Показ меню с задержкой
      }, 200); // 200 мс задержка
    } else {
      setShowCityMenu(false); // Закрытие меню
    }
  };

  return (
    <header className="bg-white">
      {/* Top Bar */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/public/img/logo.png"
                alt="FLOWERS&OPT"
                className="h-8"
              />
            </a>

            {/* Center Section */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Language Selector */}
              <div className="flex items-center gap-1 cursor-pointer">
                <span>RU</span>
                <ChevronDown className="w-4 h-4" />
              </div>

              {/* City Selector */}
              <div className="relative group">
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={toggleCityMenu}
                >
                  <span>Ваш город Москва</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                {showCityMenu && (
                  <div
                    className={`absolute top-full mt-2 bg-white shadow-lg rounded-lg ${
                      isCityMenuOpen ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300`}
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-black"
                    >
                      Киев
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-black"
                    >
                      Москва
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:text-black"
                    >
                      Амстердам
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:89049999999"
                className="text-gray-600 hover:text-black"
              >
                8(904) 999 99 99
              </a>
              <a
                href="tel:88009999999"
                className="text-gray-600 hover:text-black"
              >
                8(800) 999 99 99
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Left Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              <a
                href="/caatalog"
                className="flex items-center gap-2 text-black hover:text-gray-600"
              >
                <Snowflake className="w-4 h-4" />
                Каталог
              </a>
              <a href="/about" className="text-gray-600 hover:text-black">
                О нас
              </a>
              <a href="/payment" className="text-gray-600 hover:text-black">
                Оплата
              </a>
              <a href="/delivery" className="text-gray-600 hover:text-black">
                Доставка
              </a>
              <a href="/subscription" className="text-gray-600 hover:text-black">
                Подписка на цветы
              </a>
              <a href="/returns" className="text-gray-600 hover:text-black">
                Возврат
              </a>
              <a href="/corporate" className="text-gray-600 hover:text-black">
                Корпоративным клиентам
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Right Icons */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-600 hover:text-black">
                <Search className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-black">
                <Heart className="w-6 h-6" />
              </button>
              <button className="p-2 text-gray-600 hover:text-black relative">
                <ShoppingBag className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#85CA40] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="p-2 text-gray-600 hover:text-black">
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
