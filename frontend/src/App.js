import React from 'react'
import { Summary } from './components/Summarize';
import { Article } from './components/Article'
import './App.css';

function App() {
  return (
    <div className="App">
      <Article />
      <Summary />
    </div>
  );
}

export default App;
