import React from 'react';
import './App.scss';
import TierList from './components/TierList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <TierList />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
