import React from 'react';
import './App.scss';
import UseMap from './components/UseMap';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseMap />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
