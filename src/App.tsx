import React from 'react';
import './App.scss';
import Memory from './components/Memory';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <Memory />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
