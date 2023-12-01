import React from 'react';
import './App.scss';
import UseWindowSize from './components/UseWindowSize';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseWindowSize />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
