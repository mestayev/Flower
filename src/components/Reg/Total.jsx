import React, { useEffect, useState } from "react";

export default function Total() {
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    // Получаем данные о корзине из localStorage
    const savedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (savedCartData) {
      setCartData(savedCartData);
    }
  }, []);

  if (!cartData) {
    return <div>Загрузка...</div>;
  }

  const { product, quantity } = cartData;
  const subtotal = product.price * quantity;
  const delivery = 19;
  const discount = 20;
  const cashback = Math.floor(subtotal * 0.1);
  const total = (subtotal + delivery - discount - cashback).toFixed(2); // округляем до 2 знаков после запятой

  return (
    <div className="cart text-black">
      <h1 className="text-black">Ваша корзина</h1>

      <div className="cart-item">
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} className="item-image" />
        <div className="item-details">
          <h3>{product.title}</h3>
          <div className="item-controls flex flex-col">
            <span className="items-start w-full">{quantity} × {product.price} $</span>
            <span className="item-price text-end w-full ">{subtotal} $</span>
          </div>
        </div>
      </div>

      <div className="cart-summary text-black">
        <div className="summary-row">
          <span>Сумма</span>
          <span>{subtotal} $</span>
        </div>
        <div className="summary-row">
          <span>Доставка</span>
          <span>{delivery} $</span>
        </div>
        <div className="summary-row discount">
          <span>Скидка</span>
          <span>- {discount} $</span>
        </div>
        <div className="summary-row cashback">
          <span>Ваш кешбэк 10%</span>
          <span>+ {cashback} $</span>
        </div>

        <div className="total">
          <span>ИТОГО К ОПЛАТЕ</span>
          <span>{total} $</span> {/* Итоговая сумма с двумя знаками после запятой */}
        </div>
      </div>

      <style jsx>{`
        .cart {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #F0F0F1;
          color: black;
          font-family: Arial, sans-serif;
        }

        h1 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .cart-item {
          display: flex;
          margin-bottom: 20px;
          background-color: white;
          padding: 10px;
          border-radius: 8px;
          color: black;
        }

        .item-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 4px;
        }

        .item-details {
          margin-left: 10px;
          flex-grow: 1;
        }

        .item-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 10px;
        }

        .item-price {
          font-weight: bold;
        }

        .cart-summary {
          margin-top: 20px;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .discount {
          color: #ef4444;
        }

        .cashback {
          color: #10b981;
        }

        .total {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          font-weight: bold;
          margin-top: 20px;
        }

        .total span:last-child {
          color: #10b981;
        }
      `}</style>
    </div>
  );
}
