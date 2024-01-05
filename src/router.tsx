import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './screens/Error';
import ThemeContextProvider from './context/ThemeContext';
import { QUESTIONS_INFO } from './constants/questions';

const getExerciseRoutes = () =>
  QUESTIONS_INFO.map((question) => ({
    path: `fe/exercise/${question.id}`,
    element: <question.component />,
  }));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: getExerciseRoutes(),
  },
]);

const Router: React.FC<Props> = () => {
  return (
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
};

export default Router;
