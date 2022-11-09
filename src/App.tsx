import React from 'react';
import './App.scss';
import DeepEquals from './components/DeepEquals';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <DeepEquals />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
