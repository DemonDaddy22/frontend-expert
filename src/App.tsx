import React from 'react';
import './App.scss';
import QuestionList from './components/QuestionList';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='container'>
        <QuestionList />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
