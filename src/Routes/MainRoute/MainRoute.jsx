import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import HomeMain from '../../Pages/Home/HomeMain/HomeMain';
import About from '../../Pages/About/About';
import Login from '../../Pages/Login/Login';
import Signup from '../../Pages/Signup/Signup';
import AntiqueMain from '../../Pages/Antique/AntiqueMain/AntiqueMain';
import DiamondMain from '../../Pages/Diamond/Diamond/DiamondMain';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import GoldMain from '../../Pages/Gold/GoldMain/GoldMain';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <HomeMain></HomeMain>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/sign-up',
        element: <Signup></Signup>,
      },
      {
        path: '/diamond',
        element: (
          <PrivateRoute>
            <DiamondMain></DiamondMain>
          </PrivateRoute>
        ),
      },
      {
        path: '/gold',
        element: (
          <PrivateRoute>
            <GoldMain></GoldMain>
          </PrivateRoute>
        ),
      },
      {
        path: '/antique',
        element: (
          <PrivateRoute>
            <AntiqueMain></AntiqueMain>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
