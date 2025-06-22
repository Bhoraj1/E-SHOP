import React from "react";

const Button = ({ text, type, className, handler = () => {} }) => {
  return (
    <button
      type={type}
      className={`${className}  cursor-pointer hover:scale-105 duration-200 py-2 px-8 rounded-full relative z-10`}
    >
      {text}
    </button>
  );
};

export default Button;
