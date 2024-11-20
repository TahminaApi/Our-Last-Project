import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/MainRoute/MainRoute';

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
