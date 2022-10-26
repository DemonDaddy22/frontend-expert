import React from 'react';
import './App.scss';
import NotificationsMenu from './components/NotificationsMenu';
import ThemeContextProvider from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="container">
        <NotificationsMenu />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
