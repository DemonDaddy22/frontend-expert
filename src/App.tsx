import React from 'react';
import './App.scss';
import PurchaseForm from './components/PurchaseForm';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <PurchaseForm />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
