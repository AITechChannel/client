import MyNote from '@/features/my-note';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../features/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/my-note',
    element: <MyNote />
  }
]);

export default router;
