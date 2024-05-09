import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import './portfolioPiece.css';
import App from './App.jsx';
import Home from './pages/home.jsx';
import Resume from './pages/resume.jsx';
import AoCaC from './pages/AoCaC.jsx';
import Chess from './pages/chess.jsx'
import TicTacToe from './pages/ticTacToe.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/Resume',
        element: <Resume/>
      },
      {
        path:'/AoCaC',
        element: <AoCaC/>
      },
      {
        path:'/Chess',
        element:<Chess/>
      },
      {
        path:'/TicTacToe',
        element:<TicTacToe/>
      }
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
