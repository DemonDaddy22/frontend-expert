import React from 'react';
import './App.scss';
import CreateDOM from './components/CreateDOM';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <CreateDOM />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
