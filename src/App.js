import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Orders from './Components/Orders';
import Register from './Components/Register';
import Main from './Layout/Main';
import Privet from './Privet.js/Privet';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element: <Home></Home>
        },
        {
          path:'/orders',
          element: <Privet><Orders></Orders> </Privet>
        },
        {
          path:'/header',
          element: <Header></Header>
        },
        {
          path:'/login',
          element: <LogIn></LogIn>
        },
        {
          path:'/register',
          element: <Register></Register>
        }
       
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
