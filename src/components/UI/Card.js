import React from 'react';

export default function Card(props) {
  return (
    <div
      className={`drop-shadow-md rounded-lg bg-white overflow-hidden ${props.className}`}
    >
      {props.children}
    </div>
  );
}
