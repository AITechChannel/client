import Login from '@/features/login';
import Notes from '@/features/notes';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../features/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/notes',
    element: <Notes />
  }
]);

export default router;
