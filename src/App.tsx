import React from 'react';
import './App.scss';
import CorrespondingNode from './components/CorrespondingNode';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <CorrespondingNode />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
