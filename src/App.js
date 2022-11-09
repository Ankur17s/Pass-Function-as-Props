import React from 'react';
import './style.css';
import User from './User'

export default function App() {
  function getData() {
    alert("Fuction is Called");
  }

  return (
    <div>
      <User data={getData} />
    </div>

  );
}
