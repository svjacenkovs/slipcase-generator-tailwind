import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`pl-2 pr-2 rounded-lg text-lg bg-navy text-yellow overflow-hidden w-fit drop-shadow-xl hover:scale-105 ${props.className} `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
