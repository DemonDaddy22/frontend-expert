import React from 'react';
import './App.scss';
import ConnectFour from './components/ConnectFour';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <ConnectFour />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
