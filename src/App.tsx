import React from 'react';
import './App.scss';
import BlogPost from './components/BlogPost';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <BlogPost />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
