import Notes from '@/features/notes';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../features/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/notes',
    element: <Notes />
  }
]);

export default router;
