import AlgoExpertLogo from '../components/AlgoExpertLogo';
import AlgoExpertProducts from '../components/AlgoExpertProducts';
import ArrayMethods from '../components/ArrayMethods';
import BlogPost from '../components/BlogPost';
import ConnectFour from '../components/ConnectFour';
import CorrespondingNode from '../components/CorrespondingNode';
import CreateDOM from '../components/CreateDOM';
import CryptoPrices from '../components/CryptoPrices';
import Curry from '../components/Curry';
import Debounce from '../components/Debounce';
import DeepEquals from '../components/DeepEquals';
import EventTarget from '../components/EventTarget';
import Flatten from '../components/Flatten';
import InfiniteScroll from '../components/InfiniteScroll';
import ItemCart from '../components/ItemCart';
import Memoize from '../components/Memoize';
import Memory from '../components/Memory';
import Navbar from '../components/Navbar';
import NotificationsMenu from '../components/NotificationsMenu';
import PhoneInput from '../components/PhoneInput';
import PigEmoji from '../components/PigEmoji';
import PromiseMethods from '../components/PromiseMethods';
import Promises from '../components/Promises';
import Promisify from '../components/Promisify';
import PurchaseForm from '../components/PurchaseForm';
import QuestionList from '../components/QuestionList';
import Quiz from '../components/Quiz';
import RainbowCircles from '../components/RainbowCircles';
import RobotEmoji from '../components/RobotEmoji';
import SignUpForm from '../components/SignUpForm';
import SpaghettiRecipe from '../components/SpaghettiRecipe';
import StopWatch from '../components/StopWatch';
import Sudoku from '../components/Sudoku';
import TestingFramework from '../components/TestingFramework';
import ThisBinding from '../components/ThisBinding';
import Throttle from '../components/Throttle';
import TicTacToe from '../components/TicTacToe';
import TierList from '../components/TierList';
import TipCalculator from '../components/TipCalculator';
import Toasts from '../components/Toasts';
import TodoList from '../components/TodoList';
import TrendingStocks from '../components/TrendingStocks';
import TypeAhead from '../components/TypeAhead';
import UseFetch from '../components/UseFetch';
import UseInterval from '../components/UseInterval';
import UseLocalStorage from '../components/UseLocalStorage';
import UseMap from '../components/UseMap';
import UseStateWithHistory from '../components/UseStateWithHistory';
import UseWindowSize from '../components/UseWindowSize';
import Wordle from '../components/Wordle';

export const QUESTIONS_INFO = Object.freeze([
  {
    id: 'signup-form',
    name: 'Sign-up Form',
    component: SignUpForm,
    category: 'HTML',
  },
  {
    id: 'item-cart',
    name: 'Item Cart',
    component: ItemCart,
    category: 'HTML',
  },
  {
    id: 'spaghetti-recipe',
    name: 'Spaghetti Recipe',
    component: SpaghettiRecipe,
    category: 'HTML',
  },
  {
    id: 'blog-post',
    name: 'Blog Post',
    component: BlogPost,
    category: 'HTML',
  },
  {
    id: 'rainbow-circles',
    name: 'Rainbow Circles',
    component: RainbowCircles,
    category: 'CSS',
  },
  {
    id: 'navbar',
    name: 'Navbar',
    component: Navbar,
    category: 'CSS',
  },
  {
    id: 'pig-emoji',
    name: 'Pig Emoji',
    component: PigEmoji,
    category: 'CSS',
  },
  {
    id: 'purchase-form',
    name: 'Purchase Form',
    component: PurchaseForm,
    category: 'CSS',
  },
  {
    id: 'algoexpert-products',
    name: 'AlgoExpert Products',
    component: AlgoExpertProducts,
    category: 'CSS',
  },
  {
    id: 'robot-emoji',
    name: 'Robot Emoji',
    component: RobotEmoji,
    category: 'CSS',
  },
  {
    id: 'notifications-menu',
    name: 'Notifications Menu',
    component: NotificationsMenu,
    category: 'CSS',
  },
  {
    id: 'algoexpert-logo',
    name: 'AlgoExpert Logo',
    component: AlgoExpertLogo,
    category: 'CSS',
  },
  {
    id: 'flatten',
    name: 'Flatten',
    component: Flatten,
    category: 'JavaScript',
  },
  {
    id: 'testing-framework',
    name: 'Testing Framework',
    component: TestingFramework,
    category: 'JavaScript',
  },
  {
    id: 'array-methods',
    name: 'Array Methods',
    component: ArrayMethods,
    category: 'JavaScript',
  },
  {
    id: 'event-target',
    name: 'Event Target',
    component: EventTarget,
    category: 'JavaScript',
  },
  {
    id: 'debounce',
    name: 'Debounce',
    component: Debounce,
    category: 'JavaScript',
  },
  {
    id: 'this-binding',
    name: 'This Binding',
    component: ThisBinding,
    category: 'JavaScript',
  },
  {
    id: 'promisify',
    name: 'Promisify',
    component: Promisify,
    category: 'JavaScript',
  },
  {
    id: 'throttle',
    name: 'Throttle',
    component: Throttle,
    category: 'JavaScript',
  },
  {
    id: 'curry',
    name: 'Curry',
    component: Curry,
    category: 'JavaScript',
  },
  {
    id: 'promise-methods',
    name: 'Promise Methods',
    component: PromiseMethods,
    category: 'JavaScript',
  },
  {
    id: 'deep-equals',
    name: 'Deep Equals',
    component: DeepEquals,
    category: 'JavaScript',
  },
  {
    id: 'promises',
    name: 'Promises',
    component: Promises,
    category: 'JavaScript',
  },
  {
    id: 'corresponding-node',
    name: 'Corresponding Node',
    component: CorrespondingNode,
    category: 'JavaScript',
  },
  {
    id: 'memoize',
    name: 'Memoize',
    component: Memoize,
    category: 'JavaScript',
  },
  {
    id: 'create-dom',
    name: 'Create DOM',
    component: CreateDOM,
    category: 'JavaScript',
  },
  {
    id: 'trending-stocks',
    name: 'Trending Stocks',
    component: TrendingStocks,
    category: 'JavaScript',
  },
  {
    id: 'infinite-scroll',
    name: 'Infinite Scroll',
    component: InfiniteScroll,
    category: 'DOM Manipulation',
  },
  {
    id: 'stop-watch',
    name: 'Stop Watch',
    component: StopWatch,
    category: 'DOM Manipulation',
  },
  {
    id: 'tic-tac-toe',
    name: 'Tic Tac Toe',
    component: TicTacToe,
    category: 'DOM Manipulation',
  },
  {
    id: 'todo-list',
    name: 'Todo List',
    component: TodoList,
    category: 'DOM Manipulation',
  },
  {
    id: 'typeahead',
    name: 'TypeAhead',
    component: TypeAhead,
    category: 'DOM Manipulation',
  },
  {
    id: 'tier-list',
    name: 'Tier List',
    component: TierList,
    category: 'DOM Manipulation',
  },
  {
    id: 'toasts',
    name: 'Toasts',
    component: Toasts,
    category: 'DOM Manipulation',
  },
  {
    id: 'sudoku',
    name: 'Sudoku',
    component: Sudoku,
    category: 'DOM Manipulation',
  },
  {
    id: 'use-fetch',
    name: 'Use Fetch',
    component: UseFetch,
    category: 'React Hooks',
  },
  {
    id: 'use-local-storage',
    name: 'Use Local Storage',
    component: UseLocalStorage,
    category: 'React Hooks',
  },
  {
    id: 'use-state-with-history',
    name: 'Use State With History',
    component: UseStateWithHistory,
    category: 'React Hooks',
  },
  {
    id: 'use-interval',
    name: 'Use Interval',
    component: UseInterval,
    category: 'React Hooks',
  },
  {
    id: 'use-window-size',
    name: 'Use Window Size',
    component: UseWindowSize,
    category: 'React Hooks',
  },
  {
    id: 'use-map',
    name: 'Use Map',
    component: UseMap,
    category: 'React Hooks',
  },
  {
    id: 'tip-calculator',
    name: 'Tip Calculator',
    component: TipCalculator,
    category: 'React',
  },
  {
    id: 'phone-input',
    name: 'Phone Input',
    component: PhoneInput,
    category: 'React',
  },
  {
    id: 'crypto-prices',
    name: 'Crypto Prices',
    component: CryptoPrices,
    category: 'React',
  },
  {
    id: 'question-list',
    name: 'Question List',
    component: QuestionList,
    category: 'React',
  },
  {
    id: 'quiz',
    name: 'Quiz',
    component: Quiz,
    category: 'React',
  },
  {
    id: 'wordle',
    name: 'Wordle',
    component: Wordle,
    category: 'React',
  },
  {
    id: 'memory',
    name: 'Memory',
    component: Memory,
    category: 'React',
  },
  {
    id: 'connect-four',
    name: 'Connect Four',
    component: ConnectFour,
    category: 'React',
  },
]);
