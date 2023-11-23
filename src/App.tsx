import React from 'react';
import './App.scss';
import UseFetch from './components/UseFetch';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <UseFetch />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
