import React, { useState } from 'react'
import Total from './Total';

export default function Register() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  const [recipient, setRecipient] = useState(''); // Для имени получателя
  const [email, setEmail] = useState(''); // Для email получателя
  const [phone, setPhone] = useState(''); // Для телефона
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [totalAmount, setTotalAmount] = useState(0); // Сумма заказа

  // Заглушка для расчета суммы
  // Предполагаем, что сумма расчитывается на основе данных из корзины
  const calculateTotal = () => {
    const dummyTotal = 5000; // Это пример, в реальности нужно будет передавать данные из корзины
    setTotalAmount(dummyTotal);
  };

  // Отправка формы
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Оплата успешно проведена!');
    console.log({ cardNumber, expiryDate, cvv, paymentMethod, recipient, email, phone, deliveryAddress, totalAmount });
  };

  return (
    <div className='flex gap-[50px] mt-[50px]'>
      <div className="flex flex-col w-[785px] border border-[#453C3C80] p-6 mb-[80px]">
        <h1 className="text-[30px] font-semibold text-[#453C3C] mb-6">Оформление заказа</h1>

        {/* Выбор получателя */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold mb-2">Выберите тип доставки:</h2>
          <div className="flex gap-4">
            <label><input type="radio" name="recipient" className="mr-2" /> Я получу заказ</label>
            <label><input type="radio" name="recipient" className="mr-2" /> Другой человек</label>
            <label><input type="radio" name="recipient" className="mr-2" /> Анонимная доставка</label>
          </div>
        </div>

        {/* Информация о получателе */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold mb-2">Имя и телефон получателя</h2>
          <input
            type="text"
            placeholder="Имя получателя"
            className="w-full border border-gray-400 rounded-[8px] p-2 mb-4"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Телефон получателя"
            className="w-full border border-gray-400 rounded-[8px] p-2"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Адрес доставки */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold mb-2">Адрес доставки</h2>
          <select className="w-full border border-gray-400 rounded-[8px] p-2 mb-4">
            <option value="Москва">Москва</option>
            <option value="Узбекистан">Узбекистан</option>
            <option value="Англия">Англия</option>
          </select>
          <input
            type="text"
            placeholder="Квартира/офис, подъезд, этаж"
            className="w-full border border-gray-400 rounded-[8px] p-2 mb-4"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
          <textarea
            placeholder="Ваш комментарий"
            className="w-full border border-gray-400 rounded-[8px] p-2 mb-4"
          />
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" /> Позвонить перед выездом курьера
          </label>
        </div>

        {/* Контактная информация */}
        <div className="mb-6">
          <h2 className="text-[16px] font-semibold mb-2">Контактная информация</h2>
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border border-gray-400 rounded-[8px] p-2 mb-4"
          />
          <input
            type="email"
            placeholder="Ваш Email"
            className="w-full border border-gray-400 rounded-[8px] p-2 mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Кнопка */}
        <button
          onClick={handleSubmit} 
          className="w-full bg-[#85CA40] text-white font-semibold py-3 rounded-lg"
        >
          Оформить заказ
        </button>
      </div>

      {/* Компонент Total */}
      <div><Total totalAmount={totalAmount} /></div>
    </div>
  );
}
