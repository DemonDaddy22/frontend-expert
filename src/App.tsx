import React from 'react';
import './App.scss';
import PromiseMethods from './components/PromiseMethods';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <PromiseMethods />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
