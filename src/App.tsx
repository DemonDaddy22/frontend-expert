import React from 'react';
import './App.scss';
import SpaghettiRecipe from './components/SpaghettiRecipe';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <SpaghettiRecipe />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
