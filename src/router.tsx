import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ThemeContextProvider from './context/ThemeContext';
import { QUESTIONS_INFO } from './constants/questions';
import IndexRoute from './components/IndexRoute';
import Error from './components/Error';

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
    children: [{ index: true, element: <IndexRoute /> }, ...getExerciseRoutes()],
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
