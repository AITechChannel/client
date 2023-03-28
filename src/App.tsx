import './App.scss';
import router from './routers/router';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store, { useAppSelector } from './store/store';
import { theme } from './store/common/themeSlice';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
