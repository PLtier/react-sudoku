import React from 'react';
import './style.css';
import Board from './boardLogic.js';

export default function App() {
  return (
    <div>
      <h1>Sudoku</h1>
      <Board />
    </div>
  );
}
