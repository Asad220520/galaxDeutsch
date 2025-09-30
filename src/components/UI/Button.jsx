// Button.js
import React from "react";

export default function Button({
  children,
  onClick,
  disabled = false,
  variant = "primary", // primary | secondary | danger
  size = "md", // sm | md | lg
  leftIcon,
  rightIcon,
  className = "",
  type = "button",
}) {
  const baseClasses =
    "flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none";

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300",
    secondary:
      "bg-white hover:bg-gray-200 text-black border border-gray-300 h-12",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
}
