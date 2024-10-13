import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  About,
  Adopta,
  AnimalesAdoptados,
  Campanas,
  Colabora,
  Contacto,
  Error,
  Eventos,
  HomeLayout,
  Landing,
  SingleCard,
} from './pages';

// import { loader as adoptaLoader } from './pages/Adopta';
// import { loader as singleLoader } from './pages/SingleCard';

const router = createBrowserRouter([
  {
    path: 'dog-app',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'adopta',
        element: <Adopta />,
        // loader: adoptaLoader,
      },
      {
        path: 'adopta/:id',
        // loader: singleLoader,
        element: <SingleCard />,
      },
      {
        path: 'animalesAdoptados',
        element: <AnimalesAdoptados />,
      },
      {
        path: 'colabora',
        element: <Colabora />,
      },
      {
        path: 'campanas',
        element: <Campanas />,
      },
      {
        path: 'eventos',
        element: <Eventos />,
      },
      {
        path: 'contacto',
        element: <Contacto />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
