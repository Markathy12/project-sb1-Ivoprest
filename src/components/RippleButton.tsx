import React from "react";

type RippleButtonProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

const RippleButton: React.FC<RippleButtonProps> = ({ label, onClick, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const size = Math.max(button.clientWidth, button.clientHeight);
    const x = e.nativeEvent.offsetX - size / 2;
    const y = e.nativeEvent.offsetY - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.className = "ripple";

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`relative overflow-hidden bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-lg ${className}`}
    >
      {label}
    </button>
  );
};

export default RippleButton;
