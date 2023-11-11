import React from 'react';
import './App.scss';
import TypeAhead from './components/TypeAhead';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <TypeAhead />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
