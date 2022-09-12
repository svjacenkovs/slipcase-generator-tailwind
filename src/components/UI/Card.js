import React from 'react';

export default function Card(props) {
  return <div className={`shadow-lg rounded-lg bg-white overflow-hidden ${props.className}`}>{props.children}</div>;
}
