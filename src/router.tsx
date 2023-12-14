import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './screens/Error';
import ThemeContextProvider from './context/ThemeContext';
import ConnectFour from './components/ConnectFour';
import SignUpForm from './components/SignUpForm';
import ItemCart from './components/ItemCart';
import SpaghettiRecipe from './components/SpaghettiRecipe';
import BlogPost from './components/BlogPost';
import RainbowCircles from './components/RainbowCircles';
import Navbar from './components/Navbar';
import PigEmoji from './components/PigEmoji';
import PurchaseForm from './components/PurchaseForm';
import AlgoExpertProducts from './components/AlgoExpertProducts';
import RobotEmoji from './components/RobotEmoji';
import NotificationsMenu from './components/NotificationsMenu';
import AlgoExpertLogo from './components/AlgoExpertLogo';
import TestingFramework from './components/TestingFramework';
import ArrayMethods from './components/ArrayMethods';
import EventTarget from './components/EventTarget';
import Debounce from './components/Debounce';
import ThisBinding from './components/ThisBinding';
import Promisify from './components/Promisify';
import Throttle from './components/Throttle';
import Curry from './components/Curry';
import PromiseMethods from './components/PromiseMethods';
import DeepEquals from './components/DeepEquals';
import Promises from './components/Promises';
import Flatten from './components/Flatten';
import CorrespondingNode from './components/CorrespondingNode';
import Memoize from './components/Memoize';
import CreateDOM from './components/CreateDOM';
import TrendingStocks from './components/TrendingStocks';
import InfiniteScroll from './components/InfiniteScroll';
import StopWatch from './components/StopWatch';
import TicTacToe from './components/TicTacToe';
import TodoList from './components/TodoList';
import TypeAhead from './components/TypeAhead';
import TierList from './components/TierList';
import Toasts from './components/Toasts';
import Sudoku from './components/Sudoku';
import UseFetch from './components/UseFetch';
import UseLocalStorage from './components/UseLocalStorage';
import UseStateWithHistory from './components/UseStateWithHistory';
import UseInterval from './components/UseInterval';
import UseWindowSize from './components/UseWindowSize';
import UseMap from './components/UseMap';
import TipCalculator from './components/TipCalculator';
import PhoneInput from './components/PhoneInput';
import CryptoPrices from './components/CryptoPrices';
import QuestionList from './components/QuestionList';
import Quiz from './components/Quiz';
import Wordle from './components/Wordle';
import Memory from './components/Memory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: 'fe/exercise/signup-form',
    element: <SignUpForm />,
  },
  {
    path: 'fe/exercise/item-cart',
    element: <ItemCart />,
  },
  {
    path: 'fe/exercise/spaghetti-recipe',
    element: <SpaghettiRecipe />,
  },
  {
    path: 'fe/exercise/blog-post',
    element: <BlogPost />,
  },
  {
    path: 'fe/exercise/rainbow-circles',
    element: <RainbowCircles />,
  },
  {
    path: 'fe/exercise/navbar',
    element: <Navbar />,
  },
  {
    path: 'fe/exercise/pig-emoji',
    element: <PigEmoji />,
  },
  {
    path: 'fe/exercise/purchase-form',
    element: <PurchaseForm />,
  },
  {
    path: 'fe/exercise/algoexpert-products',
    element: <AlgoExpertProducts />,
  },
  {
    path: 'fe/exercise/robot-emoji',
    element: <RobotEmoji />,
  },
  {
    path: 'fe/exercise/notifications-menu',
    element: <NotificationsMenu />,
  },
  {
    path: 'fe/exercise/algoexpert-logo',
    element: <AlgoExpertLogo />,
  },
  {
    path: 'fe/exercise/testing-framework',
    element: <TestingFramework />,
  },
  {
    path: 'fe/exercise/array-methods',
    element: <ArrayMethods />,
  },
  {
    path: 'fe/exercise/event-target',
    element: <EventTarget />,
  },
  {
    path: 'fe/exercise/debounce',
    element: <Debounce />,
  },
  {
    path: 'fe/exercise/this-binding',
    element: <ThisBinding />,
  },
  {
    path: 'fe/exercise/debounce',
    element: <Debounce />,
  },
  {
    path: 'fe/exercise/promisify',
    element: <Promisify />,
  },
  {
    path: 'fe/exercise/throttle',
    element: <Throttle />,
  },
  {
    path: 'fe/exercise/curry',
    element: <Curry />,
  },
  {
    path: 'fe/exercise/promise-methods',
    element: <PromiseMethods />,
  },
  {
    path: 'fe/exercise/deep-equals',
    element: <DeepEquals />,
  },
  {
    path: 'fe/exercise/promises',
    element: <Promises />,
  },
  {
    path: 'fe/exercise/flatten',
    element: <Flatten />,
  },
  {
    path: 'fe/exercise/corresponding-node',
    element: <CorrespondingNode />,
  },
  {
    path: 'fe/exercise/memoize',
    element: <Memoize />,
  },
  {
    path: 'fe/exercise/create-dom',
    element: <CreateDOM />,
  },
  {
    path: 'fe/exercise/trending-stocks',
    element: <TrendingStocks />,
  },
  {
    path: 'fe/exercise/infinite-scroll',
    element: <InfiniteScroll />,
  },
  {
    path: 'fe/exercise/stop-watch',
    element: <StopWatch />,
  },
  {
    path: 'fe/exercise/tic-tac-toe',
    element: <TicTacToe />,
  },
  {
    path: 'fe/exercise/todo-list',
    element: <TodoList />,
  },
  {
    path: 'fe/exercise/typeahead',
    element: <TypeAhead />,
  },
  {
    path: 'fe/exercise/tier-list',
    element: <TierList />,
  },
  {
    path: 'fe/exercise/toasts',
    element: <Toasts />,
  },
  {
    path: 'fe/exercise/sudoku',
    element: <Sudoku />,
  },
  {
    path: 'fe/exercise/use-fetch',
    element: <UseFetch />,
  },
  {
    path: 'fe/exercise/use-local-storage',
    element: <UseLocalStorage />,
  },
  {
    path: 'fe/exercise/use-state-with-history',
    element: <UseStateWithHistory />,
  },
  {
    path: 'fe/exercise/use-interval',
    element: <UseInterval />,
  },
  {
    path: 'fe/exercise/use-window-size',
    element: <UseWindowSize />,
  },
  {
    path: 'fe/exercise/use-map',
    element: <UseMap />,
  },
  {
    path: 'fe/exercise/tip-calculator',
    element: <TipCalculator />,
  },
  {
    path: 'fe/exercise/phone-input',
    element: <PhoneInput />,
  },
  {
    path: 'fe/exercise/crypto-prices',
    element: <CryptoPrices />,
  },
  {
    path: 'fe/exercise/question-list',
    element: <QuestionList />,
  },
  {
    path: 'fe/exercise/quiz',
    element: <Quiz />,
  },
  {
    path: 'fe/exercise/wordle',
    element: <Wordle />,
  },
  {
    path: 'fe/exercise/memory',
    element: <Memory />,
  },
  {
    path: 'fe/exercise/connect-four',
    element: <ConnectFour />,
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
