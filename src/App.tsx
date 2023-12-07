import React from 'react';
import './App.scss';
import Quiz from './components/Quiz';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Quiz />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
