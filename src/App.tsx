import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.scss';
import QuestionsMenu from './components/ProjectPage/components/QuestionsMenu';
import ProjectNavbar from './components/ProjectNavbar';

const App = () => {
  return (
    <div className='container'>
      <QuestionsMenu />
      <Outlet />
      <ProjectNavbar />
    </div>
  );
};

export default App;
