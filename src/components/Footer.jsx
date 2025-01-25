import { Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white py-12 ml-[120px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Navigation */}
          <nav className="space-y-4">
            <a href="/about" className="block text-gray-600 hover:text-gray-900 transition-colors">
              О нас
            </a>
            <a href="/payment" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Оплата
            </a>
            <a href="/delivery" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Доставка
            </a>
            <a href="/subscription" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Подписка на цветы
            </a>
          </nav>

          {/* Center Navigation */}
          <nav className="space-y-4">
            <a href="/materials" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Стоматологические материалы
            </a>
            <a href="/instruments" className="block text-gray-600 hover:text-gray-900 transition-colors">
              Стоматологические инструменты
            </a>
          </nav>

          {/* Right Section */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="space-y-2">
              <a href="tel:89049999999" className="block text-gray-600 hover:text-gray-900 transition-colors">
                8(904) 999 99 99
              </a>
              <a href="tel:88009999999" className="block text-gray-600 hover:text-gray-900 transition-colors">
                8(800) 999 99 99
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#0088cc] transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06-.01.13-.02.2z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#eb4d4d] transition-colors"
                aria-label="Viber"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#0077FF] transition-colors"
                aria-label="VK"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[#FF0000] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                </svg>
              </a>
            </div>

            {/* Logo */}
            <div className="flex items-center gap-2">
              <img 
                src="/public/img/logo.png" 
                alt="FLOWERS&OPT" 
                className="h-[41px] w-[207px] rounded-full"
              />

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

