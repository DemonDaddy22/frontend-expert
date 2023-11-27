import React from 'react';
import './App.scss';
import UseStateWithHistory from './components/UseStateWithHistory';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseStateWithHistory />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
