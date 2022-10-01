import React from 'react';
import './App.scss';
import SignUpForm from './components/SignUpForm';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <SignUpForm />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
