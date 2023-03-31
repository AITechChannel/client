import Login from '@/features/auth';
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
