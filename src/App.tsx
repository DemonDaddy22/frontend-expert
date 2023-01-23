import React from 'react';
import './App.scss';
import InfiniteScroll from './components/InfiniteScroll';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <InfiniteScroll />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
