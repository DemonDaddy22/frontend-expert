import React from 'react';
import './App.scss';
import PhoneInput from './components/PhoneInput';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <PhoneInput />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
