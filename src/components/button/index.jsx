import React from "react";
const Button = ({ type = "submit", onClick, title, color, another, ...props}) => {
  return (
    <button
      type={type}
      onClick={onClick && onClick}
      className={`${color} ${another} p-2 rounded-[6px] text-white hover:underline transition text-white`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
