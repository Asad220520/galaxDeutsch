import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Settings, User } from "lucide-react";

function Header() {
  const location = useLocation();
  const navRef = useRef(null);
  const [bottomPadding, setBottomPadding] = useState(0);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  const navItems = [
    { name: "Главная", to: "/", icon: <Home size={20} /> },
    { name: "Словарь", to: "/dictionary", icon: <BookOpen size={20} /> },
    { name: "Настройки", to: "/settings", icon: <Settings size={20} /> },
    { name: "Профиль", to: "/profile", icon: <User size={20} /> },
  ];

  // Вычисляем высоту панели
  useEffect(() => {
    const updatePadding = () => {
      if (navRef.current) setBottomPadding(navRef.current.offsetHeight);
    };
    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // Скрытие/появление панели при скролле вниз/вверх
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll.current && current > 50)
        setHidden(true); // вниз — скрываем
      else setHidden(false); // вверх — показываем
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Десктопная навигация */}
      <header className="hidden md:flex h-16 bg-gray-800 text-white p-6 justify-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 ${
              location.pathname === item.to ? "bg-gray-700" : ""
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </header>

      {/* Мобильная навигация */}
      <nav
        ref={navRef}
        className={`fixed bottom-0 left-0 right-0 md:hidden bg-gray-800 text-white flex justify-around p-2 shadow-inner z-50 transition-transform duration-300 ${
          hidden ? "translate-y-full" : "translate-y-0"
        }`}
      >
        {navItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center text-xs"
            >
              <div
                className={`p-2 rounded-full transition-colors ${
                  isActive ? "bg-blue-500 text-white" : "text-gray-200"
                }`}
              >
                {React.cloneElement(item.icon, {
                  color: isActive ? "white" : undefined,
                })}
              </div>
              <span className={`${isActive ? "text-white" : "text-gray-200"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Динамический отступ снизу */}
      <div style={{ height: bottomPadding }} className="md:hidden" />
    </>
  );
}

export default Header;
