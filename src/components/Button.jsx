import React from "react";

const Button = ({ title, id, leftIcon, rightIcon, containerClass, href }) => {
  // If href is provided, render as a link
  if (href) {
    return (
      <a
        href={href}
        id={id}
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full 
          bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div>{title}</div>
        </span>
        {rightIcon}
      </a>
    );
  }

  // Otherwise, render as a button
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full 
        bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;
