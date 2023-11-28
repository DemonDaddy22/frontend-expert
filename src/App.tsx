import React from 'react';
import './App.scss';
import UseInterval from './components/UseInterval';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseInterval />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
