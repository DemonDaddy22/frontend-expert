import React from 'react';
import './App.scss';
import EventTarget from './components/EventTarget';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <EventTarget />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
