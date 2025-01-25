import React, { useState } from "react";
import Gul1 from "./Gul1"; // Импортируем Gul1
import Total from "./Total"; // Импортируем Total

export default function ParentComponent() {
  const [items, setItems] = useState([]); // Состояние для корзины

  const handleAddToCart = (product) => {
    // Добавляем товар в корзину
    setItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <Gul1 onAddToCart={handleAddToCart} /> {/* Передаем функцию в Gul1 */}
      <Total items={items} /> {/* Передаем корзину в Total */}
    </div>
  );
}
