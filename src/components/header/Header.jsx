import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Settings, User } from "lucide-react";

function Header() {
  const location = useLocation();

  const navItems = [
    { name: "Главная", to: "/", icon: <Home size={20} /> },
    { name: "Словарь", to: "/dictionary", icon: <BookOpen size={20} /> },
    { name: "Настройки", to: "/settings", icon: <Settings size={20} /> },
    { name: "Профиль", to: "/profile", icon: <User size={20} /> },
  ];

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
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-gray-800 text-white flex justify-around p-2 shadow-inner">
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
    </>
  );
}

export default Header;
