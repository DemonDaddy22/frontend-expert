import React from 'react';
import './App.scss';
import TodoList from './components/TodoList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <TodoList />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
